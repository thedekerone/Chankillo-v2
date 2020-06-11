import React from "react";
import { Article, Text, Title, Content } from "./styles";

export const Thumbnail = () => {
  return (
    <Article>
      <img src="/images/camp1.jpg" alt="growing" width="100%" />
      <Content>
        <Title>This is still and article</Title>
        <Text>
          Enjoy the delicious mango kent in it's best state, containing a lot of
          good calories this delocious fruit is a great adition to your diet.
        </Text>
      </Content>
    </Article>
  );
};
