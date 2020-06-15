import React from "react";
import { Wrapper } from "styles/Wrapper";
import { Thumbnail } from "components/Thumbail";
import { Grid, Title } from "./styles";

export const Blog = () => {
  return (
    <Wrapper margin="0 0 4rem 0" padding="0">
      <Title>How's the production going?</Title>
      <Grid maxWidth="1200px" width="100%" margin="0 auto">
        <Thumbnail></Thumbnail>
        <Thumbnail></Thumbnail>
        <Thumbnail></Thumbnail>
      </Grid>
    </Wrapper>
  );
};
