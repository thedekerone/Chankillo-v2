import styled, { css } from "styled-components";

const inactive = css`
  cursor: not-allowed;
  color: #000 !important;
  border: 1px solid grey !important;
  &:hover {
    background: transparent !important;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  ${(props) => props.padding && "padding: " + props.padding};
  ${(props) => props.width && "width: " + props.width};
  ${(props) => props.color && "color: " + props.color};
  ${(props) => props.background && "background: " + props.background};
  ${(props) => props.border && "border: " + props.border};
  ${(props) => props.fontWeight && "font-weight: " + props.fontWeight};
  ${(props) => props.size && "font-size: " + props.size};
  text-align: center;
  outline: none;

  ${(props) => props.disabled && inactive}

  @media (min-width: 900px) {
    &:hover {
      ${(props) => props.bHover && "background: " + props.bHover};
      ${(props) => props.cHover && "color: " + props.cHover};
    }
  }

  &:active {
    ${(props) => props.bActive && "background: " + props.bActive};
    ${(props) => props.cActive && "color: " + props.cActive};
  }

  @media (max-width: 900px) {
    ${(props) => props.xl_width && "width:" + props.xl_width};
    ${(props) => props.xl_padding && "padding:" + props.xl_padding};
    ${(props) => props.xl_margin && "margin:" + props.xl_margin};
  }
  transition: 0.3s;
  @media (max-width: 700px) {
    ${(props) => props.lg_width && "width:" + props.lg_width};
    ${(props) => props.lg_padding && "padding:" + props.lg_padding};
    ${(props) => props.lg_margin && "margin:" + props.lg_margin};
  }
`;
