import React from "react";
import { Grid } from "./styles";
import { Thumbnail } from "components/Thumbail";
export const Posts = ({ posts }) => {
  return (
    <Grid maxWidth="1200px" width="100%" margin="0 auto" padding="0 1rem">
      {posts.map((post) => (
        <Thumbnail
          cover={post.metadata.cover.url}
          title={post.title}
          key={post.slug}
          description={post.metadata.description}
          slug={post.slug}
        ></Thumbnail>
      ))}
    </Grid>
  );
};
