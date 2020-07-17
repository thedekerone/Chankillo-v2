import React, { FC } from "react";
import {
  StateWrapper,
  Container,
  Title,
  Content,
  Image,
} from "./styles";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import { Wrapper } from "styles/Wrapper";
import { FruitStateProps } from "TS/interfaces";
export const FruitState:FC<FruitStateProps> = ({
  show = false,
  children,
  time,
  image,
  setTime,
}) => {
  return (
    <Container
      maxWidth="1000px"
      width="100#"
      margin="2rem auto"
      position="relative"
      show={show}
    >
      <Wrapper position="absolute" width="100%">
        <StateWrapper show={show}>
           {show && <Image height="100%" width="100%" src={image} alt="test"/>} 
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
