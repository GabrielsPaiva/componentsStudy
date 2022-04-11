import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Main from './components/Main'
import Footer from './components/Footer'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}
body{
  background: whitesmoke;
}
`


export default class Componentization extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Header />
        <About />
        <Main />
        <Footer />
      </>
    )
  }
}