import React from "react";
import { ContactForm } from "components/ContactForm";
import { Wrapper } from "styles/Wrapper";
import { Title, Text, Partial } from "./styles";

export const Hero = ({ title, message }) => {
  return (
    <Wrapper
      position="relative"
      background="#F9F9F9"
      padding="12rem 3rem 5rem"
      xl_padding="14rem 2rem 6rem"
    >
      <Partial></Partial>
      <Wrapper
        width="100%"
        maxWidth="1250px"
        flex
        xl_direction="column"
        justifyContent="space-between"
        margin="0 auto"
        alignItems="center"
      >
        <Wrapper width="33rem" xl_width="100%" margin="0 0 3rem 0">
          <Title>{title}</Title>
          <Text>{message}</Text>
        </Wrapper>
        <ContactForm></ContactForm>
      </Wrapper>
    </Wrapper>
  );
};
