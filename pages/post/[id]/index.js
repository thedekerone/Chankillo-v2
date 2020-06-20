import React from "react";
import { useRouter } from "next/router";
import { Posts } from "components/Posts";
import { Thumbnail } from "components/Thumbail";
import { Layout } from "components/Layout";
import ReactHtmlParser from "react-html-parser";
import { Wrapper } from "styles/Wrapper";
import { Title } from "styles/Post/styles";

export default (props) => {
  const router = useRouter();
  const { id } = router.query;
  const post = props.posts.objects.find((post) => post.slug == id);
  console.log(id);
  return (
    <Layout>
      <Wrapper
        maxWidth="900px"
        width="100%"
        padding="9rem 1rem 5rem"
        margin="0 auto"
      >
        <Title>{post.title}</Title>
        <Wrapper maxWidth="900px" margin="2rem 0 " width="100%">
          {ReactHtmlParser(post.content)}
        </Wrapper>
      </Wrapper>
    </Layout>
  );
};

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch(
    "https://api.cosmicjs.com/v1/766276a0-6f97-11e9-a240-33a121016213/objects?pretty=true&hide_metafields=true&type=posts&limit=3&props=slug,title,content,metadata,"
  );
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.objects.map((post) => `/post/${post.slug}`);

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}
export async function getStaticProps(context) {
  const data = await fetch(
    `https://www.googleapis.com/youtube/v3/search?channelId=UCg0gsaTRZY8if77FlHoj8ag&part=id,snippet&key=${process.env.YOUTUBE_KEY}&fields=items(id/videoId,snippet(title,description,thumbnails/medium))`
  );
  const posts = await fetch(
    "https://api.cosmicjs.com/v1/766276a0-6f97-11e9-a240-33a121016213/objects?pretty=true&hide_metafields=true&type=posts&limit=3&props=slug,title,content,metadata,"
  );
  const postJson = await posts.json();
  const json = await data.json();

  return {
    props: {
      data: json,
      posts: postJson,
    }, // will be passed to the page component as props
  };
}
