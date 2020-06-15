import React from "react";
import { Wrapper } from "styles/Wrapper";
import { List, NavbarContainer, Anchor } from "./styles";

export const Navbar = () => {
  return (
    <NavbarContainer width="100%" position="relative">
      <Wrapper
        position="absolute"
        padding="1rem 3rem"
        flex
        width="100%"
        lg_padding="1rem 1rem"
        justifyContent="space-between"
        alignItems="center"
      >
        <div>
          <img src="/images/logo.png" width="80px" alt="logo" />
        </div>
        <div>
          <List>
            <li>
              <Anchor active href="#">
                HOME
              </Anchor>
            </li>
            <li>
              <Anchor href="#">PRODUCTS</Anchor>
            </li>
            <li>
              <Anchor href="#">ABOUT</Anchor>
            </li>
          </List>
        </div>
      </Wrapper>
    </NavbarContainer>
  );
};
