import React from "react";

// styles
import styled from "styled-components";
import media from "styled-media-query"

// images
import valorantLogo from "C:/Users/gabri/OneDrive/Documentos/VS code/Desafios/components/src/assets/valorant_logo.jpg";
import valorantName from "C:/Users/gabri/OneDrive/Documentos/VS code/Desafios/components/src/assets/valorant_name.png";

const Div = styled.div`
  background-color: rgb(17, 17, 17);
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 8em;

  ${media.lessThan("small")`
  flex-direction: column-reverse;
  `}
`
const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  text-transform: uppercase;
  font-size: 16px;
  width: 45%;
  margin-right: 5%;

  ${media.lessThan('small')`
  font-size: 12px;
  width: 80%;
  margin: 0 0 22px 18px;
  `}
`
const ListItem = styled.li`
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #ff0000;
  }
`
const LogoDiv = styled.div`
display: flex;
align-items: center;
width: 40%;
margin-left: 18px:
`
const ValorantLogo = styled.img`
  display: flex;
  width: 10%;
  margin-left: 18px;

  ${media.lessThan("small")`
  width: 20%;
  margin: 22px 0 0 0;
  `}
  `
const ValorantName = styled.img`
width: 50%;
margin-left: 18px;
cursor: pointer;

${media.lessThan("small")`
  width: 80%;
  margin: 22px 0 0 10px;
  `}
`

function Header() {
  return (
    <Div>
      <List>
        <ListItem>inicio</ListItem>
        <ListItem>sobre</ListItem>
        <ListItem>galeria</ListItem>
      </List>
      <LogoDiv>
        <ValorantLogo src={valorantLogo} alt="" />
        <ValorantName src={valorantName} alt="" />
      </LogoDiv>
    </Div>
  );
}

export default Header;
