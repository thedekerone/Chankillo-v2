import React from "react";
import { Wrapper } from "styles/Wrapper";
import { List, NavbarContainer, Anchor } from "./styles";
import Link from "next/link";

export const Navbar = ({ path }) => {
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
        <Wrapper width="5rem">
          <a href="/">
            <img
              src={require("public/images/logo.png?webp")}
              width="100%"
              alt="logo"
            />
          </a>
        </Wrapper>
        <div>
          <List>
            <li>
              <a href="/">
                <Anchor active={path == "home"}>HOME</Anchor>
              </a>
            </li>
            <li>
              <a href="/post">
                <Anchor active={path == "post"}>POST</Anchor>
              </a>
            </li>
            <li>
              <a href="#">
                <Anchor active={path == "about"}>ABOUT</Anchor>
              </a>
            </li>
          </List>
        </div>
      </Wrapper>
    </NavbarContainer>
  );
};
