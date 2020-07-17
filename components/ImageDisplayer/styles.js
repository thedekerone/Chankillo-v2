import styled,{css} from "styled-components"
import { slideIn, slideOut, slideInReverse, slideOutReverse } from "animation"

const sIn = css`
animation:${slideIn} .6s linear;`

const sOut = css`
animation:${slideOut} .6s linear;
`
const sInReverse = css`
animation:${slideInReverse} .6s linear;`

const sOutReverse = css`
animation:${slideOutReverse} .6s linear;
`

export const AbsoluteImage = styled.img`
    width:100%;
    height:100%;
    position:absolute;
    transition:.6s;
    object-fit:cover;
    top:0;
    left: ${props=>props.show?"0" :props.pos?"-100%":"100%"};
`