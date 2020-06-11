import styled from "styled-components";
import { Wrapper } from "styles/Wrapper";

export const Grid = styled(Wrapper)`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 4rem;
`;

export const Title = styled.h3`
  color: #a4a4a4;
  font-weight: 400;
  letter-spacing: 0.235em;
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;
