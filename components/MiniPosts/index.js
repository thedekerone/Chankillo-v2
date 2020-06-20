import React from "react";
import { Grid } from "./styles";
import { Thumbnail } from "components/Thumbail";
export const MiniPosts = ({ posts }) => {
  return (
    <Grid maxWidth="1200px" width="100%" margin="0 auto">
      {posts.map((post) => (
        <Thumbnail
          mini={true}
          cover={post.metadata.cover.url}
          title={post.title}
          key={post.slug}
          slug={post.slug}
        ></Thumbnail>
      ))}
    </Grid>
  );
};
