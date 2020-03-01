import React, { FunctionComponent } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"

import {
  ContentContainer,
  Content
} from './styles'

import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import "./styles.css"

//TODO: Pass icons to list and move from css file to styled-components
const MyH1 = (props: any) => <h1 {...props} />
const MyParagraph = (props: any) => <p style={{ fontSize: "1rem" }} {...props} />

const components = {
  h1: MyH1,
  p: MyParagraph,
}


/**
 * TODO: add menu with react motion
 */

const Layout: FunctionComponent = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <MDXProvider components={components}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <ContentContainer>
        <Content>
          {children}
        </Content>
      </ContentContainer>
      <Footer>
        {new Date().getFullYear()},
        {` `}
        <a href="https://www.gatsbyjs.org">Peter Bartels</a>
      </Footer>
    </MDXProvider>
  )
}

export default Layout
