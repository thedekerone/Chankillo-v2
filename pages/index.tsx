import Head from "next/head";
import { useEffect, useLayoutEffect, FC } from "react";
import { Hero } from "components/Hero";

import { Navbar } from "components/Navbar";
import { Products } from "components/Products";
import { Blog } from "components/Blog";
import { VideoSection } from "components/VideoSection";
import { Youtube } from "components/Context";
import { Layout } from "components/Layout";
import { Wrapper } from "styles/Wrapper";
import { ContactForm } from "components/ContactForm";
import { Certifications } from "components/Certifications";
import { VideoData, ProviderData } from "TS/interfaces";
import { Message } from "components/ContactForm/styles";
function index({posts}) {
  const data:Array<VideoData> = [
    {
      url: "https://www.youtube.com/embed/mghV1_tksUU",
      title: "Talking with the Engineer Efer Calle. October 2019.",
      description:
        "We spoke with the Engineer Efer Calle, General Manager of Agroinversiones Huarangal EIRL, a company that is part of Chankillo Farmers.",
      imgPath:
        "https://i.ytimg.com/vi/mghV1_tksUU/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBRWRpbKUEQVbZn-uBvbn8kibvWpg",
    },
    {
      url: "https://www.youtube.com/embed/8e1cZ7oqyXo",
      title: "Conversando con el Ing. César Bernuy. Septiembre 2019.",
      description:
        "Conversamos con el Ing. César Bernuy , Gerente General de Fundo El Molinero EIRL, empresa que forma parte de Chankillo Farmers.",
      imgPath:
        "https://i.ytimg.com/vi/8e1cZ7oqyXo/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCLAuJutKWvl6mfrix5Io6VKx_kfA",
    },
  ];

  return (
    <Youtube.Provider value={{ videos: data, posts: posts.objects }}>
      <Layout path="home">
        <Hero
          title="FIND THE BEST FRUITS
        IN THE MARKET"
          message="In Chankillo Farmers we are proud of the quality we deliver in all
        of our fruits. Contact us to get a quote and learn more"
        ></Hero>
        <Products></Products>
        <Wrapper padding="0 1rem">
          <Blog></Blog>
        </Wrapper>
        <VideoSection></VideoSection>
        <Certifications></Certifications>
      </Layout>
      {/* <Message>Email Sent!</Message> */}
    </Youtube.Provider>
  );
}

export async function getServerSideProps(context) {
  const posts = await fetch(
    "https://api.cosmicjs.com/v1/766276a0-6f97-11e9-a240-33a121016213/objects?pretty=true&hide_metafields=true&type=posts&limit=3&props=slug,title,content,metadata,"
  );
  const postJson = await posts.json();

  return {
    props: {
      posts: postJson,
    }, // will be passed to the page component as props
  };
}

export default index;
