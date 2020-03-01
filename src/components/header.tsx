import React, { FunctionComponent } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useTypewriter from 'react-use-typewriter'

import {
  Centered,
  NameContainer,
  Name,
  TyperContainer,
  HeaderContainer,
  Header,
  MenuItem,
  Icons
} from './styles'

export type Props = {
  readonly siteTitle: string
}

const HeaderComponent: FunctionComponent<Props> = ({ siteTitle }) => {

  const typerWords = ["react", "typescript", "nodejs"]
  const currentTyperWord = useTypewriter({
    words: typerWords
  })

  return (<>
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
  </>)
}

export default HeaderComponent
