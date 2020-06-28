import React from "react";
import {
  StateWrapper,
  Container,
  Title,
  Content,
  ImageContainer,
} from "./styles";
import { Wrapper } from "styles/Wrapper";
export const FruitState = ({
  show = false,
  children,
  title,
  content,
  images = [],
}) => {
  console.log(images);
  return (
    <Container
      maxWidth="1000px"
      width="100#"
      margin="2rem auto"
      position="relative"
      show={show}
    >
      <StateWrapper
        background="white"
        width="100%"
        position="absolute"
        show={show}
      >
        <Title>{title}</Title>
        <Content>{content}</Content>
        <ImageContainer>
          {images.map((el, index) => {
            return <img src={el} key={index} alt="state image" />;
          })}
        </ImageContainer>
        {children}
      </StateWrapper>
    </Container>
  );
};
