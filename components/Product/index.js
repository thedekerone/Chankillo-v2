import React from "react";
import { ProductName, Description, Img } from "./styles";
import { Button } from "styles/Button";
import { Wrapper } from "styles/Wrapper";

export const Product = ({
  title = "Mango",
  description = "desc",
  img = "/images/mangoex.jpg",
  reverse,
}) => {
  return (
    <Wrapper
      margin="4rem 0 8rem 0"
      xl_margin="3rem 0 6rem 0"
      flex
      width="100%"
      justifyContent="space-between"
      direction={reverse && "row-reverse"}
      lg_direction="column"
      lg_align="center"
    >
      <Wrapper width="23rem" lg_width="100%">
        <Img width="100%" src={img} alt="mango" />
      </Wrapper>
      <Wrapper
        flex
        lg_width="100%"
        direction="column"
        justifyContent="space-betweem"
        width="25rem"
      >
        <ProductName>{title}</ProductName>
        <Description>{description}</Description>
        <Button
          color="#14B86B"
          width="20rem"
          lg_width="100%"
          padding="1rem "
          bHover="#14B86B"
          cHover="white"
          bActive="#14B86B"
          cActive="white"
          border="1px solid #14B86B"
          background="white"
          fontWeight="500"
          disabled
        >
          LEARN MORE
        </Button>
      </Wrapper>
    </Wrapper>
  );
};
