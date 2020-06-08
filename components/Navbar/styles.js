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
    font-weight: 500;
    text-decoration: none;
    font-size: 1rem;
    color: white;
    margin: 0 0 0 4rem;
    @media (max-width: 900px) {
      color: #5e5e5e;
    }
  }
`;

export const NavbarContainer = styled(Wrapper)`
  z-index: 2;
  position: relative;
  max-width: 1700px;
  margin: 0 auto;
`;
