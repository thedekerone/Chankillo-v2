import styled, { css } from "styled-components";
import { Wrapper } from "styles/Wrapper";

const active = css`
  color: #14b86b;
  position: relative;
  font-weight: bold;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    background: #14b86b;
    left: 0;
    bottom: 2px;
  }
`;

export const List = styled.ul`
  list-style: none;
  & li {
    display: inline-block;
  }
`;

export const Anchor = styled.a`
  position: relative;
  z-index: 2;
  display: block;
  font-weight: bold;
  height: 1.5rem;
  text-decoration: none;
  font-size: 0.95rem;
  color: #a7a7a7;
  margin: 0 0 0 6.5rem;
  ${(props) => props.active && active};
  &:hover {
    ${active}
  }
  @media (max-width: 900px) {
    color: #5e5e5e;
    margin: 0 0 0 3.8rem;
  }
  @media (max-width: 700px) {
    color: #5e5e5e;
    margin: 0 0 0 1.8rem;
  }
`;

export const NavbarContainer = styled(Wrapper)`
  z-index: 2;
  position: relative;
  max-width: 1700px;
  margin: 0 auto;
`;
