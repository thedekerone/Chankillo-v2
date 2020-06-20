import React, { Fragment } from "react";
import { Navbar } from "components/Navbar";
import { GlobalStyles } from "GlobalStyles";
import { Wrapper } from "styles/Wrapper";

export const Layout = ({ children }) => {
  return (
    <Fragment>
      <GlobalStyles></GlobalStyles>
      <Navbar></Navbar>
      {children}
    </Fragment>
  );
};
