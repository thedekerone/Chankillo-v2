import React from "react";

import { Blog } from "components/Blog";
import { Youtube } from "components/Context";
import { Layout } from "components/Layout";
import { Wrapper } from "styles/Wrapper";
import { Posts } from "components/Posts";
import { Title } from "styles/Post/styles";

export default ({posts}) => {
  return (
    <Layout path="post">
      <Wrapper
        maxWidth="1200px"
        width="100%"
        margin="0 auto"
        padding="12rem 1rem 0"
      >
        <Title>Posts</Title>
        <Posts posts={posts.objects}></Posts>
      </Wrapper>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const posts = await fetch(
    "https://api.cosmicjs.com/v1/766276a0-6f97-11e9-a240-33a121016213/objects?pretty=true&hide_metafields=true&type=posts&limit=20&props=slug,title,content,metadata"
  );
  const postJson = await posts.json();

  return {
    props: {
      posts: postJson,
    },
  };
}
