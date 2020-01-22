import React, { FunctionComponent } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img, { FixedObject } from "gatsby-image"

export type ImageFluidType = {
  readonly file: {
    readonly childImageSharp: {
      readonly fixed: FixedObject
    }
  }
}

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image: FunctionComponent = () => {
  const data = useStaticQuery<ImageFluidType>(graphql`
    query {
      file(relativePath: { eq: "peterbartels.jpg" }) {
        childImageSharp {
          fixed(width: 300, height: 300, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  console.log(data)
  return <Img fixed={data.file.childImageSharp.fixed} style={{ borderRadius: "50%" }} />
}

export default Image
