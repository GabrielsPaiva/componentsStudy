import React from "react";
import styled from 'styled-components'

const H2 = styled.h2`
display: flex;
font-family: "Anton", sans-serif;
font-size: 70px;
font-weight: bolder;
text-transform: uppercase;
margin-left: 50px;
padding-top: 25px;
`

function charactersClass({gameFunction}){
    return <H2>{gameFunction}</H2>
}

export default charactersClass