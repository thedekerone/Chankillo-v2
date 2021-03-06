import React from "react";
import { Wrapper } from "styles/Wrapper";
import { FooterContainer, Anchor, Icon } from "./styles";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <FooterContainer>
      <Wrapper
        width="100%"
        maxWidth="1500px"
        flex
        justifyContent="space-between"
        alignItems="center"
        padding="4rem 2rem"
        margin="0 auto"
        bottom="0"
        lg_direction="column"
      >
        <Wrapper
          direction="column"
          alignItems="center"
          flex
          justifyContent="center"
          width="100%"
        >
          <h2>Email</h2>
          <div>
            <Anchor href="#">info@chankillofarmersperu.com</Anchor>
          </div>
          {/* <div>
            <Anchor href="#">info@chankillofarmers.com</Anchor>
          </div> */}
        </Wrapper>
        <Wrapper flex justifyContent="center" width="100%" lg_margin="3rem 0">
          <img
            src={require("public/images/logo.png?webp")}
            alt="logo"
            height="100px"
            width="100px"
          />
        </Wrapper>
        <Wrapper flex justifyContent="center" width="100%">
          <Icon>
            <FaFacebookSquare size="25"></FaFacebookSquare>
          </Icon>
          <Icon>
            <FaTwitterSquare size="25"></FaTwitterSquare>
          </Icon>
          <Icon>
            <FaInstagramSquare size="25"></FaInstagramSquare>
          </Icon>
        </Wrapper>
      </Wrapper>
    </FooterContainer>
  );
};
