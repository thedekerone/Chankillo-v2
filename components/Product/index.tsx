import React from "react";
import { ProductName, Description, Img } from "./styles";
import { Button } from "styles/Button";
import { Wrapper } from "styles/Wrapper";
import { useRouter } from "next/router";
import { useNearScreen } from "utils/useNearScreen";
import { AnimatedWrapper } from "../../styles/AnimatedWrapper";
import { ProductProps } from "TS/interfaces";

export const Product = ({
  title = "Mango",
  description = "desc",
  img = "/images/mangoex.jpg",
  reverse = false,
}:ProductProps) => {
  const [show, element] = useNearScreen();

  const router = useRouter();
  return (
    <AnimatedWrapper
      ref={element}
      show={show}
      margin="4rem 0 8rem 0"
      xl_margin="3rem 0 6rem 0"
      flex
      width="100%"
      justifyContent="space-between"
      direction={reverse ? "row-reverse": undefined}
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
          color="#16CA76"
          width="20rem"
          lg_width="100%"
          padding="1rem "
          bHover="#16CA76"
          cHover="white"
          bActive="#109356"
          cActive="white"
          border="1px solid #16CA76"
          onClick={() => {
            router.push("/product/kent-mango");
          }}
          background="#FbFbFb"
          fontWeight="500"
        >
          LEARN MORE
        </Button>
      </Wrapper>
    </AnimatedWrapper>
  );
};
