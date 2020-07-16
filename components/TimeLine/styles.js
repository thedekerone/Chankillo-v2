import styled, { css } from "styled-components";

export const Node = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  border: 1px solid #16ca76;
  position: relative;
  cursor:pointer;
  display: flex;
  transition:.4s;
  justify-content: center;
  background: ${(props) => (props.current ? "#16ca76" : "#fdfdfd")};
  &:after {
    content: "default";
    content: "${(props) => (props.stage ? props.stage.toString() : "none")}";
    color: black;
    top: 20px;
    position: absolute;
    text-align: center;
    display: ${(props) => (props.current ? " block" : "none")};
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  z-index: -1;
  position: absolute;
  background: #16ca76;
  top: 10px;
`;
