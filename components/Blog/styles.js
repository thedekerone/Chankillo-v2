import styled from "styled-components";
import { Wrapper } from "styles/Wrapper";

export const Grid = styled(Wrapper)`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(auto-fit, minmax(18.5rem, 1fr));
  gap: ${(props) => (props.gap ? props.gap : "3.5rem")};
`;

export const Title = styled.h3`
  color: #109356;
  font-weight: 500;
  letter-spacing: 0.273em;
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 4.5rem;
`;
