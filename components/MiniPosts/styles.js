import styled from "styled-components";
import { Wrapper } from "styles/Wrapper";

export const Grid = styled(Wrapper)`
  display: grid;
  margin-top: 2rem;
  grid-template: auto / 13rem;
  gap: 0 2rem;

  @media (max-width: 900px) {
    grid-template-rows: auto;
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  }
`;
