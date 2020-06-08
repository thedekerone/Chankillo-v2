import React from "react";
import { Wrapper } from "styles/Wrapper";
import { Title } from "./styles";
import { Product } from "../Product";
export const Products = () => {
  return (
    <Wrapper
      margin="10rem auto 4rem"
      xl_margin="6rem auto 4rem"
      width="100%"
      maxWidth="900px"
      padding="1rem"
    >
      <Title>GET TO KNOW MOTE ABOUT OUR PRODUCTS</Title>
      <Product
        title="MANGO KENT"
        img="/images/mangoex.jpg"
        description="Enjoy the delicious mango kent in it's best state, containing a lot of
          good calories this delocious fruit is a great adition to your diet."
      ></Product>
      <Product
        title="MANGO KEITT"
        img="/images/camp1.jpg"
        description="Enjoy the delicious mango kent in it's best state, containing a lot of
          good calories this delocious fruit is a great adition to your diet."
        reverse
      ></Product>
      <Product
        title="HASS AVOCADO"
        img="/images/camp2.jpg"
        description="Enjoy the delicious mango kent in it's best state, containing a lot of
          good calories this delocious fruit is a great adition to your diet."
      ></Product>
    </Wrapper>
  );
};
