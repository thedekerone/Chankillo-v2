import React, { Fragment } from "react";
import { Navbar } from "components/Navbar";
import { GlobalStyles } from "GlobalStyles";
import { Wrapper } from "styles/Wrapper";

export const Layout = ({ children, path }) => {
  return (
    <Fragment>
      <GlobalStyles></GlobalStyles>
      <Navbar path={path}></Navbar>
      {children}
    </Fragment>
  );
};
