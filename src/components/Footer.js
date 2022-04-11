import React from "react";

// styles
import styled from 'styled-components'
import media from "styled-media-query";

const Div = styled.div`
  background-color: rgb(17, 17, 17);
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  width: 100%;
  height: 9em;
  margin-top: 10em;

  ${media.lessThan("small")`
  margin-top: 26em;
  height: 6em;
  `}
`

const H3 = styled.h3` 
color: white;
font-weight: lighter;
text-transform: uppercase;
padding-right: 16px;

${media.lessThan("small")`
 font-size: 12px;
 `}
`

export default function Footer() {
    return(
        <Div>
                <H3>Projeto de estudo para o Vai na Web</H3>
        </Div>
    )
}