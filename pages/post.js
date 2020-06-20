import React from "react";

import { Blog } from "components/Blog";
import { Youtube } from "components/Context";
import { Layout } from "components/Layout";
import { Wrapper } from "styles/Wrapper";
import { Posts } from "components/Posts";

export default (props) => {
  return (
    <Layout>
      <Wrapper padding="12rem 0 0 0">
        <Posts posts={props.posts.objects}></Posts>
      </Wrapper>
    </Layout>
  );
};

export async function getStaticProps(context) {
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
