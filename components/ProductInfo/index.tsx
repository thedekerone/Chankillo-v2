import React from 'react'
import { Wrapper } from '../../styles/Wrapper'
import {Title, Info} from "./styles"

export const ProductInfo = ({title="Kent Mango",content="Placeholder text for product information"}:{title?:string;content?:string}) => {
    return (
        <Wrapper width="100%" maxWidth="1000px" padding="10rem 1rem 1rem" margin="0rem auto 2rem">
            <Title>{title}</Title>
            <Info>{content}</Info>
        </Wrapper>
    )
}
