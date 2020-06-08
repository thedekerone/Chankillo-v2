import { ContactForm } from "components/ContactForm";
import { GlobalStyles } from "GlobalStyles";
import Head from "next/head";
import { Hero } from "components/Hero";
import { Navbar } from "components/Navbar";
import { Products } from "components/Products";

export default () => (
  <div>
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <GlobalStyles></GlobalStyles>
    <Navbar></Navbar>
    <Hero></Hero>
    <Products></Products>
  </div>
);
