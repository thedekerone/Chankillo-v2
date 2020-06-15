import { ContactForm } from "components/ContactForm";
import { GlobalStyles } from "GlobalStyles";
import Head from "next/head";
import { Hero } from "components/Hero";
import { Navbar } from "components/Navbar";
import { Products } from "components/Products";
import { Blog } from "components/Blog";
import { VideoSection } from "components/VideoSection";
import { Youtube } from "components/Context";
export default (props) => {
  return (
    <Youtube.Provider value={props.data.items}>
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
      <Blog></Blog>
      <VideoSection></VideoSection>
    </Youtube.Provider>
  );
};

export async function getStaticProps(context) {
  const data = await fetch(
    "https://www.googleapis.com/youtube/v3/search?channelId=UCg0gsaTRZY8if77FlHoj8ag&part=id, snippet&maxResults=2&key=AIzaSyB4LiTlPL11WIZt1VBlIzi6KGbON9sgNhc"
  );
  const json = await data.json();

  return {
    props: {
      data: json,
    }, // will be passed to the page component as props
  };
}
