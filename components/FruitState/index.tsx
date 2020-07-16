import React, { FC } from "react";
import {
  StateWrapper,
  Container,
  Title,
  Content,
  ImageContainer,
} from "./styles";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import { Wrapper } from "styles/Wrapper";
import { FruitStateProps } from "TS/interfaces";
export const FruitState:FC<FruitStateProps> = ({
  show = false,
  children,
  title,
  content,
  images = [],
  time,
  setTime,
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
      <Wrapper position="absolute" width="100%">
        <StateWrapper background="white" show={show}>
          <Title>{title}</Title>
          <Content>{content}</Content>
          <ImageContainer>
            {images.map((el, index) => {
              return <img src={el} key={index} alt="state image" />;
            })}
          </ImageContainer>
          {children}
        </StateWrapper>
        <Wrapper
          color="#14B86B"
          margin="2rem 0 "
          flex
          justifyContent="space-between"
          alignItems="center"
        >
          <Wrapper
            onClick={() => (time > 1 ? setTime(time - 1) : setTime(5))}
            flex
            cursor="pointer"
            alignItems="center"
          >
            <FaLongArrowAltLeft></FaLongArrowAltLeft>
            <Wrapper margin="0 0 0 1rem">Previews</Wrapper>
          </Wrapper>
          <Wrapper
            cursor="pointer"
            onClick={() => (time < 5 ? setTime(time + 1) : setTime(1))}
            flex
            alignItems="center"
          >
            <Wrapper margin="0 1rem 0 0">Next</Wrapper>
            <FaLongArrowAltRight></FaLongArrowAltRight>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </Container>
  );
};
