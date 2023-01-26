import styled from "styled-components"
import {size,boardPlacement} from '../../rowz.plugin'

const { multiplier } = size
const dimensions = 350
 
export const CheckerTable = styled.main`
    ${boardPlacement}
    position: absolute;
    height: ${dimensions*multiplier}px;
    width: ${dimensions*multiplier}px;
    padding-top:10px;
    background-color: rgb(240, 240, 240);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    align-content: stretch;
    box-shadow: 0px 5px 20px -7px #000000;
    z-index: 0;

    @media (max-width:400px) {
        -webkit-transform: scale(.8);
        -ms-transform: scale(.8);
        transform: scale(.8);
        margin-left:-30px;
    }
`

export const Rowz = styled.span`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    align-content: stretch;
`
