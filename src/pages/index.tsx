import React, { FunctionComponent } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled, { Box } from '@xstyled/styled-components'
import Avatar from "../components/avatar"

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
library.add(fab, faCheckSquare, faCoffee)

import SEO from "../components/seo"
import Layout from "../components/layout"

const RenderMdx = ({ name }: { name: string }) => {
  const mdxData = useStaticQuery(graphql`
    query {
      allMdx {
        edges {
          node {
            body
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  const allMdx = mdxData.allMdx.edges

  const [mdx] = allMdx
    .filter((mdx: any) => mdx.node.frontmatter.title === name)
    .map((mdx: any) => ({
      frontmatter: mdx.node.frontmatter,
      body: mdx.node.body
    }))
  return <MDXRenderer>{mdx.body}</MDXRenderer>
}

//https://xstyled.dev/docs/grid-system/
const IndexPage: FunctionComponent = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Box row>
        <Box px={10} m={2} col="auto"><Avatar /></Box>
        <Box px={10} m={2} col><RenderMdx name="home-intro" /></Box>
        <Box px={10} m={2} col />
      </Box>
      <Box row>
        <Box px={10} m={2} col>Column</Box>
        <Box px={10} m={2} col>Column</Box>
      </Box>
    </Layout >
  )
}

//TODO: Pass icons to list and move from css file to styled-components
const MyH1 = (props: any) => <h1 {...props} />
const MyParagraph = (props: any) => <p style={{ fontSize: "1rem" }} {...props} />

const components = {
  h1: MyH1,
  p: MyParagraph,
}

export default IndexPage
