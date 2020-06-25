import React from "react";
import { Wrapper } from "styles/Wrapper";
import { Node, Line } from "./styles";

export const TimeLine = () => {
  return (
    <Wrapper
      position="relative"
      maxWidth="800px"
      width="100%"
      flex
      justifyContent="space-between"
      margin="5rem auto"
    >
      <Line></Line>
      <Node stage="farming"></Node>
      <Node stage="farming" current></Node>
      <Node stage="farming"></Node>
      <Node stage="farming"></Node>
    </Wrapper>
  );
};
