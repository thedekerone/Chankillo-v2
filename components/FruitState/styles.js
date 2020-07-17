import styled, { css } from "styled-components";
import { Wrapper } from "styles/Wrapper";
import { appear, disappear, up, down } from "animation";
import { slideIn, slideOut } from "../../animation";
export const StateWrapper = styled(Wrapper)`
  position: relative;
  opacity: 0;
  height:0;
  width:100%;
  
  overflow:hidden;
  animation: ${(props) =>
    props.show
      ? css`
          ${slideIn} .5s ease forwards;
        `
      : css`
          ${slideOut} .5s ease forwards;
        `};
`;

export const Title = styled.h2`
  color: #2eb420;
  margin-bottom: 1rem;
`;

export const Content = styled.p`
  font-size: 1rem;
  margin-bottom: 4rem;
`;

export const Image = styled.img`
  width:100%;
  height:100%;
  object-fit:cover;
`;

export const Container = styled(Wrapper)`
  &>div {
    overflow:hidden;
  }
  /* animation: ${(props) =>
    props.show
      ? css`
          ${up} .5s ease forwards;
        `
      : css`
          ${down} 0s ease forwards;
        `}; */
`;
