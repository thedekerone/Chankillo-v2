import styled, { css } from "styled-components";
import { Wrapper } from "styles/Wrapper";
import { fade } from "animation";

export const Label = styled.label`
  margin-bottom: 3.125rem;
  padding: 0 2.875rem;
  color: #afafaf;
  font-weight: 500;
  font-size: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  text-transform: capitalize;
`;

export const Wrap = styled(Wrapper)`
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  &:after {
    content: "";
    background: #2f9a72;
    width: 0%;
    transition: 1s;
    ${(props) =>
      props.trigger &&
      css`
        animation: ${fade} 0.4s ease forwards;
      `};
    height: 3px;
    bottom: 0;
    margin: 0 auto;
    box-sizing: border-box;
    left: 0;
  }
`;

export const In = styled.input`
  margin-top: 0.71rem;
  border: 0;
  width: 100%;
  outline: none;
  border-bottom: 1px solid #e3e3e3;
  padding: 0.8rem 0.5rem;
  &:placeholder {
    color: #9e9e9e;
  }
`;
