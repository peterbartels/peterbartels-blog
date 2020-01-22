import React, { FunctionComponent } from "react"
import { useStaticQuery, graphql } from "gatsby"
//import { Link } from "gatsby"
//import Layout from "../components/layout"
import Avatar from "../components/avatar"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useTypewriter from 'react-use-typewriter'
library.add(fab, faCheckSquare, faCoffee)

import SEO from "../components/seo"
import {
  Centered,
  NameContainer,
  Name,
  TyperContainer,
  HeaderContainer,
  Header,
  MenuItem,
  Icons,
  ContentContainer,
  Content,
  FooterContainer,
  Footer
} from '../components/styles'

const MyPageLayout = () => {
  const data = useStaticQuery(graphql`
    query MDXQuery($id: String) {
      mdx(
        id: { eq: $id }
        frontmatter: { title: { eq: "Homepage" } }
      ) {
        id
        body
      }
    }
  `)
  console.log(data)
  return <MDXRenderer>{data.mdx.body}</MDXRenderer>
}

const IndexPage: FunctionComponent = () => {

  const typerWords = ["react", "typescript", "nodejs"];
  const currentTyperWord = useTypewriter({
    words: typerWords
  })

  return (<>
    <SEO title="Home" />
    <NameContainer>
      <Centered>
        <Name>
          Peter Bartels
        </Name>
        <TyperContainer>
          <div>{currentTyperWord}<span className="cursor">|</span></div>
        </TyperContainer>
      </Centered>
    </NameContainer>
    <HeaderContainer>
      <Header>
        <MenuItem>
          home
        </MenuItem>
        <MenuItem>
          resume
        </MenuItem>
        <MenuItem>
          working remotely
        </MenuItem>
        <MenuItem>
          blog
        </MenuItem>
        <MenuItem>
          contact
        </MenuItem>
        <Icons>
          <a href="https://www.linkedin.com/in/peterbartels/"><FontAwesomeIcon icon={["fab", "linkedin"]} style={{ color: "#FFFFFF" }} size="2x" /></a>
          <a href="https://github.com/peterbartels/"><FontAwesomeIcon icon={["fab", "github"]} style={{ color: "#FFFFFF" }} size="2x" /></a>
        </Icons>
      </Header>
    </HeaderContainer>
    <ContentContainer>
      <Content>
        <Avatar />
        <MyPageLayout />
      </Content>
    </ContentContainer>
    <FooterContainer>
      <Footer>
        test111111111111111111
      </Footer>
    </FooterContainer >
  </>
  )
}

//TODO: Pass icons to list and move from css file to styled-components
const MyH1 = (props: any) => <h1 {...props} />
const MyParagraph = (props: any) => <p style={{ fontSize: "1rem" }} {...props} />

const components = {
  h1: MyH1,
  p: MyParagraph,
}

export default ({ children }: any) => (
  <MDXProvider components={components}>
    <IndexPage />
  </MDXProvider>
)
