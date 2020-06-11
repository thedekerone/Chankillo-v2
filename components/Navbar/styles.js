import styled from "styled-components";
import { Wrapper } from "styles/Wrapper";

export const List = styled.ul`
  list-style: none;
  & li {
    display: inline-block;
  }
  & a {
    position: relative;
    z-index: 2;
    font-weight: bold;
    text-decoration: none;
    font-size: 0.95rem;
    color: #c7c7c7;
    margin: 0 0 0 6.5rem;

    @media (max-width: 900px) {
      color: #5e5e5e;
      margin: 0 0 0 4rem;
    }
    @media (max-width: 700px) {
      color: #5e5e5e;
      margin: 0 0 0 2rem;
    }
  }
  & li:first-child a {
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
      bottom: -3px;
    }
  }
`;

export const NavbarContainer = styled(Wrapper)`
  z-index: 2;
  position: relative;
  max-width: 1700px;
  margin: 0 auto;
`;
