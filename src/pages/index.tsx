import React, { FunctionComponent } from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


const HeaderContainer = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  width:100%;
  padding:0px 10px 0px 10px;
  background: #353434;
`

const NameContainer = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  background: #353434;
`

const MainContainer = styled.div`
  height:100%;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width:100%;
`

const Name = styled.div`
  color: #FFFFFF;
  font-family: 'Kalam';
  font-size: 2rem;;
  padding:30px 0px 30px 15px;
  
`
const Container = styled.div`
  display:flex;
  max-width:1200px;
  width:100%;
`

const Header = styled.div`
  display:flex;
  max-width:1200px;
  width:100%;
  background: #454545;
  padding:15px 15px 15px 15px;
  border-radius: 5px 5px 0px 0px;
`

const Main = styled.div`
  display:flex;
  max-width:1200px;
  width:100%;
  background: #ffffff;
  padding:15px;
  height:100%;
`

const MenuItem = styled.div`
  color:white;
  font-family: 'Raleway';
  color:white;
  text-transform: uppercase;
  font-size:0.9rem;
  font-weight:bold;
  margin-right:2rem;
`



const IndexPage: FunctionComponent = () => {
  return (<>
    <SEO title="Home" />
    <NameContainer>
      <Container>
        <Name>
          Peter Bartels
        </Name>
      </Container>
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
      </Header>
    </HeaderContainer>
    <MainContainer>
      <Main>
        t
      </Main>
    </MainContainer>
    <MainContainer>
      <Container>
        test111111111111111111
      </Container>
    </MainContainer>
  </>
  )
}

export default IndexPage
