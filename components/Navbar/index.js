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
        <Link href="/">
          <a>
            <img src="/images/logo.png" width="80px" alt="logo" />
          </a>
        </Link>
        <div>
          <List>
            <li>
              <Link href="/">
                <Anchor active={path != "post"}>HOME</Anchor>
              </Link>
            </li>
            <li>
              <Link href="/post">
                <Anchor active={path == "post"}>POST</Anchor>
              </Link>
            </li>
            <li>
              <Link href="#">
                <Anchor>ABOUT</Anchor>
              </Link>
            </li>
          </List>
        </div>
      </Wrapper>
    </NavbarContainer>
  );
};
