import React from "react";
import { useRouter } from "next/router";
import { Posts } from "components/Posts";
import { Thumbnail } from "components/Thumbail";
import { Layout } from "components/Layout";
import ReactHtmlParser from "react-html-parser";
import { Wrapper } from "styles/Wrapper";
import { Title, Related } from "styles/Post/styles";
import { MiniPosts } from "components/MiniPosts";

export default (props) => {
  const router = useRouter();
  const { id } = router.query;
  const post = props.posts.objects.find((post) => post.slug == id);
  console.log(id);
  return (
    <Layout path="post">
      <Wrapper
        maxWidth="800px"
        width="100%"
        padding="12rem 1rem 5rem"
        margin="0 auto"
      >
        <Title>{post.title}</Title>
        <Wrapper className="post-content" margin="2rem 0 " width="100%">
          {ReactHtmlParser(post.content)}
        </Wrapper>
        <Related>Related posts</Related>
        <MiniPosts posts={props.posts.objects}></MiniPosts>
      </Wrapper>
    </Layout>
  );
};

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch(
    "https://api.cosmicjs.com/v1/766276a0-6f97-11e9-a240-33a121016213/objects?pretty=true&hide_metafields=true&type=posts&limit=24&props=slug,title,content,metadata,"
  );
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.objects.map((post) => `/post/${post.slug}`);

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}
export async function getStaticProps(context) {
  const posts = await fetch(
    "https://api.cosmicjs.com/v1/766276a0-6f97-11e9-a240-33a121016213/objects?pretty=true&hide_metafields=true&type=posts&limit=24&props=slug,title,content,metadata,"
  );
  const postJson = await posts.json();

  return {
    props: {
      posts: postJson,
    }, // will be passed to the page component as props
  };
}
