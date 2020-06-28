import styled, { css } from "styled-components";
import { Wrapper } from "styles/Wrapper";
import { appear, disappear, up, down } from "animation";
import { updateArrayTypeNode } from "typescript";
export const StateWrapper = styled(Wrapper)`
  opacity: 0;
  padding: 2rem 2rem 4rem;
  -webkit-box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.1);
  animation: ${(props) =>
    props.show
      ? css`
          ${appear} .5s ease-in forwards;
        `
      : css`
          ${disappear} 0s ease forwards;
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

export const ImageContainer = styled.div`
  display: grid;
  grid-template-rows: 16rem;
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  & img {
    width: 100%;
    object-fit: cover;
    height: 100%;
  }
`;

export const Container = styled(Wrapper)`
  /* animation: ${(props) =>
    props.show
      ? css`
          ${up} .5s ease forwards;
        `
      : css`
          ${down} 0s ease forwards;
        `}; */
`;
