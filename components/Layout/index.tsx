import React, { Fragment } from "react";
import { Navbar } from "components/Navbar";
import { GlobalStyles } from "GlobalStyles";
import { Wrapper } from "styles/Wrapper";
import Head from "next/head";

import Safe from "react-safe";
import { Footer } from "../Footer";

export const Layout:React.FC<{path?:string}> = ({ children, path }) => {
  return (
    <Wrapper minHeight="120vh" padding=" 0 0 19rem 0" lg_padding="0 0 35rem 0">
      <Head>
        <meta name="twitter:card" content="summary"></meta>
        <meta name="twitter:image" content="/images/camp1.jpg"></meta>
        <title>
          Chankillo Farmers: Peruvian exporting company of Mango and Avocado
        </title>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Chankillo Farmers is a exporting company located in Casma, Ancash - Peru. We offer the best quality fruits, we currently export: Kent Mango, Keitt Mango, Hass Avocado, Strong Avocado"
        />
        <Safe.script src="https://cdn.weglot.com/weglot.min.js"></Safe.script>
        <Safe.script>
          {`Weglot.initialize({api_key: "wg_cd12a96ff7ff7de0b2bc49a7ea9556f80"})`}
        </Safe.script>
      </Head>
      <GlobalStyles></GlobalStyles>
      <Navbar path={path}></Navbar>
      {children}
      <Footer></Footer>
    </Wrapper>
  );
};
