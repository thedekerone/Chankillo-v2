import styled from "styled-components";
import { Wrapper } from "styles/Wrapper";

export const Grid = styled(Wrapper)`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  gap: 0 2rem;
`;
