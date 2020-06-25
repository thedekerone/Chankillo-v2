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
      maxWidth="1000px"
      padding="1rem"
    >
      <Title>GET TO KNOW MOTE ABOUT OUR PRODUCTS</Title>
      <Product
        title="KENT MANGO"
        img="/images/mangoex.jpg"
        description="
        Kent Mango is an excellent tasting fruit, very low in calories, very little fiber and the widest range of essential minerals and vitamins."
      ></Product>
      <Product
        title="KEITT MANGO"
        img="/images/camp1.jpg"
        description="The Keitt mango has a small seed surrounded by very little fiber. It is consistent and firm meat with a fruity flavor, mildly acidic and aromatic."
        reverse
      ></Product>
      <Product
        title="HASS AVOCADO"
        img="/images/camp2.jpg"
        description="The Hass avocado is one of the most delicious varieties of avocado around, with a rich creamy flesh and superior taste."
      ></Product>
    </Wrapper>
  );
};
