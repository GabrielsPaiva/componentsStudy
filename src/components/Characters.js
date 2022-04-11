import React from 'react';
import styled from 'styled-components';
import media, { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
    customLaptopL: '1336px',
    Laptop: "1024px",
    mobileM: "375px"
})

const Div = styled.div`
position: relative;
display: flex;
width: 100%;
height: 49vw;

${media.lessThan("small")`
height: 70vw;
`}
`
const Character = styled.img`
width: 25%;
height: 90%;
margin: 25px 0 0 5%;
`
const CharacterInformations = styled.div`
display: flex;

${media.lessThan("small")`
flex-direction: column;
align-items: center;
`}
`

const Container = styled.div`
display: flex;
flex-direction: row;
width: 100%;

${media.lessThan("small")`
height: 115%;
`}
`

const CharacterDetails = styled.div`
display: flex;
flex-direction: column;
width: 40%;
margin-left: 4%; 
`
const GameFunction = styled.h2`
  font-family: 'Anton', sans-serif;
  font-size: 58px;
  font-weight: lighter;
  text-transform: uppercase;
  margin-left: 20px;
  padding-top: 25px;

  ${customMedia.lessThan("Laptop")`
  font-size: 40px;
  `}
  ${media.lessThan("medium")`
 font-size: 30px;
 `}
 ${media.lessThan("small")`
 font-size: 20px;
 `}
`
const H3 = styled.h3`
  font-family: 'Anton', sans-serif;
  font-size: 40px;
  font-weight: lighter;
  text-transform: uppercase;
  margin-left: 20px;
  padding-top: 25px;

  ${customMedia.lessThan("Laptop")`
  font-size: 30px;
  `}
  ${media.lessThan("medium")`
  font-size: 25px;
 `}
 ${media.lessThan("small")`
 font-size: 18px;
 `}
`
const P = styled.p`
  font-family: 'Anton', sans-serif;
  font-weight: lighter;
  font-size: 25px;
  width: 100%;
  margin-left: 20px;
  padding-top: 8px;

  ${customMedia.lessThan("Laptop")`
  font-size: 20px;
  `}
  ${media.lessThan("medium")`
  font-size: 14px;
 `}
 ${media.lessThan("small")`
 font-size: 12px;
 width: 140%;
 `}
 ${customMedia.lessThan("mobileM")`
 font-size: 10px;
 `}
`
const CharacterAbility = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 50%;
margin: 0 4em 0 0;

${media.lessThan("small")`
width: 70%; 
margin: 4em 0 0 0
 `}
 ${customMedia.lessThan("mobileM")`
 margin-top: 1.8em;
 `}
`
const Ability = styled.h2`
  font-family: 'Anton', sans-serif;
  font-size: 58px;
  font-weight: lighter;
  text-transform: uppercase;
  margin-left: 20px;
  padding-top: 25px;

  ${customMedia.lessThan("Laptop")`
  font-size: 45px;
  `}
  ${media.lessThan("medium")`
  font-size: 30px;
  margin-left: 10px;
 `}
`
const AbilitiesBox = styled.div`
position: relative;
dislplay: flex;
align-items: center;
width: 100%;
margin-top: 10%;
`
const Line = styled.div`
position: relative;
background-color: black;
height: 2px;
width: 100;
top: 50%;
z-index: 0;
`
const AbilitiesImage = styled.img`
position: relative;
background-color: rgb(255,70,85);
border: solid 2px;
width: 18%;
margin-left: 6%;
top: 2px;
z-index: 1;

&:hover{
    cursor: pointer;
}
`
const AbilityText = styled.p`
font-family: 'Anton', sans-serif;
font-weight: lighter;
font-size: 25px;
width: 110%;
margin-top: 2em;

${customMedia.lessThan("Laptop")`
  font-size: 20px;
  `}
  ${media.lessThan("medium")`
  font-size: 16px;
 `}
`

export default class Characters extends React.Component {

    state = {
        firstAbility: 'INCENDIÁRIO: EQUIPE um lançador de granadas incendiárias. DISPARE para lançar uma granada que detona no chão, gerando uma zona de fogo que causa dano aos jogadores dentro dela.',
        secondAbility: 'FUMAÇA CELESTE: EQUIPE um mapa tático. DISPARE para marcar locais onde as nuvens de fumaça de Brimstone pousarão. Use o DISPARO SECUNDÁRIO para confirmar, lançando nuvens de fumaça de longa duração que bloqueiam a visão na área selecionada.',
        thirdAbility: 'SINALIZADOR ESTIMULANTE: EQUIPE um sinalizador estimulante. DISPARE para jogar o sinalizador diante de Brimstone. Ao pousar, o sinalizador criará um campo que concede Tiro Rápido aos jogadores.',
        fourthAbility: 'ATAQUE ORBITAL: EQUIPE um mapa tático. DISPARE para lançar um ataque prolongado de laser orbital no local selecionado, causando muito dano ao longo do tempo aos jogadores na área selecionada.',
        abilityShown: ''
    }

    firstAbilityButton = () => {
        this.setState({
            abilityShown: this.state.firstAbility
        })
    }
    secondAbilityButton = () => {
        this.setState({
            abilityShown: this.state.secondAbility
        })
    }
    thirdAbilityButton = () => {
        this.setState({
            abilityShown: this.state.thirdAbility
        })
    }
    fourthAbilityButton = () => {
        this.setState({
            abilityShown: this.state.fourthAbility
        })
    }

    render() {
        const { photo, altName, gameFunction, biography, ability1, ability2, ability3, ability4 } = this.props;
        return (
            <Div>
                <CharacterInformations>
                    <Container>
                        <Character src={photo} alt={altName} />
                        <CharacterDetails>
                            <GameFunction>{gameFunction}</GameFunction>
                            <div>
                                <H3>// biografia</H3>
                                <P>{biography}</P>
                            </div>
                        </CharacterDetails>
                    </Container>
                    <CharacterAbility>
                        <Ability>habilidade</Ability>
                        <AbilitiesBox>
                            <Line></Line>
                            <AbilitiesImage onClick={this.firstAbilityButton} src={ability1} alt='' />
                            <AbilitiesImage onClick={this.secondAbilityButton} src={ability2} alt='' />
                            <AbilitiesImage onClick={this.thirdAbilityButton} src={ability3} alt='' />
                            <AbilitiesImage onClick={this.fourthAbilityButton} src={ability4} alt='' />
                        </AbilitiesBox>
                        <AbilityText>{this.state.abilityShown}</AbilityText>
                    </CharacterAbility>
                </CharacterInformations>
            </Div>
        );
    }
}