import React from "react";
import { Wrapper } from "styles/Wrapper";
import { Node, Line } from "./styles";

export const TimeLine = ({ setTime, time }) => {
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
      <Node
        onClick={() => {
          setTime(1);
        }}
        current={time == 1}
        stage=" "
      ></Node>
      <Node
        onClick={() => {
          setTime(2);
        }}
        current={time == 2}
        stage=" "
      ></Node>
      <Node
        onClick={() => {
          setTime(3);
        }}
        current={time == 3}
        stage=" "
      ></Node>
      <Node
        onClick={() => {
          setTime(4);
        }}
        current={time == 4}
        stage=" "
      ></Node>
      <Node
        onClick={() => {
          setTime(5);
        }}
        current={time == 5}
        stage=" "
      ></Node>
      <Node
        onClick={() => {
          setTime(6);
        }}
        current={time == 6}
        stage=" "
      ></Node>
      <Node
        onClick={() => {
          setTime(7);
        }}
        current={time == 7}
        stage=" "
      ></Node>
    </Wrapper>
  );
};
