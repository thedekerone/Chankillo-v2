import React, { Fragment } from "react";
import { Navbar } from "components/Navbar";
import { GlobalStyles } from "GlobalStyles";
import { Wrapper } from "styles/Wrapper";
import Head from "next/head";
import { Footer } from "../Footer";

export const Layout = ({ children, path }) => {
  return (
    <Wrapper minHeight="120vh" padding=" 0 0 19rem 0">
      <Head>
        <title>Chankillo Farmers</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyles></GlobalStyles>
      <Navbar path={path}></Navbar>
      {children}
      <Footer></Footer>
    </Wrapper>
  );
};
