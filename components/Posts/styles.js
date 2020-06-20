import styled from "styled-components";
import { Wrapper } from "styles/Wrapper";

export const Grid = styled(Wrapper)`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(auto-fit, minmax(18.5rem, 1fr));
  gap: ${(props) => (props.gap ? props.gap : "3.5rem")};
`;
