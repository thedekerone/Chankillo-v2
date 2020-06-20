import React, { useContext } from "react";
import { Wrapper } from "styles/Wrapper";
import { Thumbnail } from "components/Thumbail";
import { Title } from "./styles";
import { Youtube } from "components/Context";
import { Posts } from "components/Posts";

export const Blog = () => {
  const { posts } = useContext(Youtube);
  return (
    <Wrapper margin="0 0 4rem 0" padding="0">
      <Title>How's the production going?</Title>
      <Posts posts={posts}></Posts>
    </Wrapper>
  );
};
