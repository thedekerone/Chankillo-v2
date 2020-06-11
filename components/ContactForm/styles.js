import styled from "styled-components";
import { fade } from "animation";

export const Form = styled.form`
  display: flex;
  margin-left: 2rem;
  flex-direction: column;
  position: relative;
  z-index: 2;

  ${(props) => props.width && " width:" + props.width};
  ${(props) => props.maxWidth && " max-width:" + props.maxWidth};
  ${(props) => props.height && " height:" + props.height};
  -webkit-box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.1);
  padding-top: 3.6875rem;
  background: white;

  @media (max-width: 900px) {
    width: 100%;
    margin: 0;
  }
`;
