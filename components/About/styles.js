import styled, { css } from "styled-components";
import { Wrapper } from "styles/Wrapper";

export const Paragraph = styled.p`
  line-height: 1.6em;
`;

export const ImgGrid = styled(Wrapper)`
  display: grid;
  grid-auto-flow: dense;
  grid-template-rows: auto;
  overflow: hidden;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  gap: 1rem;
`;

export const Img = styled.div`
  & img {
    object-fit: cover;
    height: 100%;
  }
  ${(props) =>
    props.double &&
    css`
      & img {
        height: 100%;
      }
      grid-row: span 2;
    `}
`;
