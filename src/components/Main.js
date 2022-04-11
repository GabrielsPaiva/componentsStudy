import React from "react";

// styles
import styled from 'styled-components'
import media from "styled-media-query";


// images
import Characters from "./Characters";

const Div = styled.div`
background-color: rgb(255,70,85);
width: 100%;
height: fit-content;
margin-top: 15em;
padding-bottom: 1em;

${media.lessThan("small")`
 margin-top: 5em;
 `}

`
const Title = styled.h2`
display: flex;
font-family: "Anton", sans-serif;
font-size: 70px;
font-weight: lighter;
text-transform: uppercase;
margin-left: 50px;
padding-top: 25px;

${media.lessThan("medium")`
font-size: 50px;
`}
${media.lessThan("small")`
font-size: 40px;
padding-top: 20px;
`}
`

export default class Main extends React.Component {

    render() {
        return (
            <Div>
                <Title>personagens</Title>
                <div>
                    <Characters
                        photo='https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt26fcf1b5752514ee/5eb7cdbfc1dc88298d5d3799/V_AGENTS_587x900_Brimstone.png'
                        altName='Brimstone'
                        gameFunction='Brimstone  //controlador'
                        biography='Vindo diretamente dos EUA, o arsenal orbital de Brimstone garante que o esquadrão dele esteja sempre em vantagem. Sua capacidade de oferecer utilidade com precisão a distância faz dele um comandante inigualável na linha de frente.'
                        ability1='https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt29aa6cc80f1caa7b/5eaf8607af7e315106b47daa/TX_Brimstone_Q.png'
                        ability2='https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt7c9f45408b1bf6e8/5eaf8607d4b10d15d3e8db48/TX_Brimstone_E.png'
                        ability3='https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt71797e5088fa6920/5eaf8606b8a6356e4ddc100d/TX_Brimstone_C.png'
                        ability4='https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt68102861930b231f/5eaf8606f66b2515dea76b38/TX_Brimstone_X.png' />
                </div>
            </Div>
        )
    }
}