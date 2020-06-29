import styled, { css } from "styled-components";
import { Wrapper } from "../Wrapper";
import { appear } from "animation";

export const AnimatedWrapper = styled(Wrapper)`
  opacity: 0;
  animation: ${(props) =>
    props.show &&
    css`
      ${appear} 1s ease forwards;
    `};
  ${(props) => props.delay && "animation-delay: " + props.delay + "s"};
`;
