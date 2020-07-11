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
        img={require("public/images/mango-kent.jpg?webp")}
        description="
        Kent Mango is an excellent tasting fruit, very low in calories, very little fiber and the widest range of essential minerals and vitamins."
      ></Product>
      <Product
        title="FUERTE AVOCADO"
        img={require("public/images/strong-avocado.jpg?webp")}
        description="The Fuerte is distinctly pear-shaped and available for eight months of the year. Its name means “strong” in Spanish, and it has an oily texture similar to that of a hazelnut."
        reverse
      ></Product>
      <Product
        title="HASS AVOCADO"
        img={require("public/gallery/carlos/IMG_20200701_121349.jpg?webp")}
        description="The Hass avocado is one of the most delicious varieties of avocado around, with a rich creamy flesh and superior taste."
      ></Product>
    </Wrapper>
  );
};
