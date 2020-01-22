import React from "react"
import styled from 'styled-components'

const columnFlexCss = `
  display: flex;
  flex-direction: column;
  align-items: center;  
`

export const HeaderContainer = styled.div`
  ${columnFlexCss}
  width: 100%;
  padding: 0px 10px 0px 10px;
  background: #353434;
`

export const NameContainer = styled.div`
  ${columnFlexCss}
  background: #353434;
`

export const Name = styled.div`
  color: #FFFFFF;
  font-family: 'Kalam';
  font-size: 2rem;;
  padding: 30px 0px 30px 15px;  
`

export const TyperContainer = styled.div`
  color: #74B816;
  display:flex;
  flex:1;
  justify-content: flex-end;
  div {
  width: 400px;
  padding: 5px;
  background: #000;
  border: 1px solid white;
  font-weight: bold;
  }
`

export const MenuItem = styled.div`
  color: white;
  font-family: 'Raleway';
  color: white;
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: bold;
  margin-right: 2rem;
`

export const Icons = styled.div`
  flex: 1;
  text-align: right;
  color: white;
`

export const Centered = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  align-items: center;
`

export const Header = styled(Centered)`
  background: #454545;
  padding:15px 15px 15px 15px;
  border-radius: 5px 5px 0px 0px;
  a {
    padding:15px 15px 15px 15px;
  }
`


export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  width: 100%;
`

export const ContentContainer = styled(MainContainer)`
  flex: 1;
  padding: 0px 10px 0px 10px;
`

export const Content = styled(Centered)`
  background: #ffffff;
  padding: 30px;
  color: black;
  display: block;
`

export const FooterContainer = styled(MainContainer)`

`

export const Footer = styled(Centered)`
  height: 200px;
`


export const GatsbyjsIcon = () => {
  return (
    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin" className="svg-inline--fa fa-linkedin fa-w-14 fa-2x " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65" >
      <path d="M57.143 32h-16v4.57h10.97c-1.6 6.857-6.63 12.57-13.257 14.857L12.57 25.143c2.743-8 10.514-13.714 19.43-13.714 6.857 0 13.03 3.43 16.914 8.686l3.43-2.97C47.77 10.97 40.457 6.857 32 6.857c-11.886 0-21.943 8.457-24.457 19.657l30.17 30.17c10.97-2.743 19.43-12.8 19.43-24.686zm-50.286.23c0 6.4 2.514 12.57 7.314 17.37s11.2 7.314 17.37 7.314z" fill="#fff"></path>
      <path d="M32 0C14.4 0 0 14.4 0 32s14.4 32 32 32 32-14.4 32-32S49.6 0 32 0zM14.17 49.83c-4.8-4.8-7.314-11.2-7.314-17.37L31.77 57.143c-6.4-.23-12.8-2.514-17.6-7.314zm23.314 6.63L7.543 26.514C10.057 15.314 20.114 6.857 32 6.857c8.457 0 15.7 4.114 20.343 10.286l-3.43 2.97C45.03 14.857 38.857 11.43 32 11.43c-8.914 0-16.457 5.714-19.43 13.714L38.857 51.43c6.63-2.286 11.657-8 13.257-14.857h-10.97V32h16c0 11.886-8.457 21.943-19.657 24.457z" fill="#639"></path>
    </svg>
  )
}
