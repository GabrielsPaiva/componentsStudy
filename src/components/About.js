import React from "react"

// styles
import styled from "styled-components"
import media, { generateMedia } from "styled-media-query"

const customMedia = generateMedia({
    Laptop: "1024px"
})

const Container = styled.div`
display: flex;
justify-content: center;
width: 100%;
`
const Div = styled.div`
background-color: rgb(255,70,85);
display: flex;
flex-direction: column;
align-items: center;
width: 50%;
height: 28em;
margin: 50px 22em 0 0;

${media.lessThan("medium")`
width: 70%;
margin: 50px 10em 0 0;
`}
${media.lessThan("small")`
width: 95%;
margin: 50px 0 0 0;
height: 24em;
`}
`
const H2 = styled.h2`
  font-family: "Anton", sans-serif;
  font-size: 55px;
  text-transform: uppercase;
  width: 90%;
  margin: 18px 0 0 0;

  ${media.lessThan("small")` 
  width: 91%;
  font-size: 40px;
  `}
`
const AboutText = styled.p`
font-size: 28px;
font-weight: bolder;
text-align: center;
width: 70%;
height: fit-content;
margin-top: 50px;

${customMedia.lessThan("Laptop")`
font-size: 22px;
`}
${media.lessThan("small")` 
  width: 90%;
  font-size: 18px;
  `}
`

function About() {
    return (
        <Container>
            <Div>
                <H2>o que é valorant</H2>
                <AboutText>VALORANT é um FPS tático 5x5 competitivo focado em personagens que se passa no mundo todo. Faça jogadas incríveis e supere seus oponentes com habilidades táticas, mecânica de tiro e trabalho em equipe.</AboutText>
            </Div>
        </Container>
    );
}

export default About;
