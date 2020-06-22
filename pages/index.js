import { ContactForm } from "components/ContactForm";
import { GlobalStyles } from "GlobalStyles";
import Head from "next/head";
import { Hero } from "components/Hero";
import { Navbar } from "components/Navbar";
import { Products } from "components/Products";
import { Blog } from "components/Blog";
import { VideoSection } from "components/VideoSection";
import { Youtube } from "components/Context";
import { Layout } from "components/Layout";
import { Wrapper } from "styles/Wrapper";
import { Certifications } from "components/Certifications";
export default (props) => {
  const data = [
    {
      url: "https://www.youtube.com/embed/mghV1_tksUU",
      title: "Conversando con el Ing. Efer Calle. Octubre 2019.",
      description:
        "Conversamos con el Ing. Efer Calle , Gerente General de Agroinversiones Huarangal EIRL, empresa que forma parte de Chankillo Farmers.",
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
    <Layout>
      <Youtube.Provider value={{ videos: data, posts: props.posts.objects }}>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <GlobalStyles></GlobalStyles>
        <Navbar></Navbar>
        <Hero
          title="FIND THE BEST FRUITS
        IN THE MARKET"
          message="In Chankillo Farmers we are proud of the quality we deliver in all
        of our fruits, contact us to get a quote and learn more"
        ></Hero>
        <Products></Products>
        <Wrapper padding="0 1rem">
          <Blog></Blog>
        </Wrapper>
        <Certifications></Certifications>
        <VideoSection></VideoSection>
      </Youtube.Provider>
    </Layout>
  );
};

export async function getStaticProps(context) {
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
