import styled from "styled-components";
import { fade, spin, showUp } from "animation";

export const Form = styled.form`
  display: flex;
  margin-left: 2rem;
  flex-direction: column;
  position: relative;
  position: relative;
  z-index: 2;

  ${(props) => props.width && " width:" + props.width};
  ${(props) => props.maxWidth && " max-width:" + props.maxWidth};
  ${(props) => props.height && " height:" + props.height};
  -webkit-box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.1);
  padding-top: 3.6875rem;
  background: white;

  @media (max-width: 900px) {
    width: 100%;
    margin: 0;
  }
`;

export const Message = styled.h5`
  position: fixed;
  z-index: 2;
  width: 13rem;
  padding: 0.4rem 2rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  animation: ${showUp} 0.4s linear;
  text-align: center;
  background: #14b86b;
  border: 1px solid #14b86b;
  left: 0.5rem;
  bottom: 0.5rem;
  color: white;
  font-weight: 500;
`;

export const CompletedAnimated = styled.div`
  width: 100%;
  height: 100%;
  background: #12a561;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  &:after {
    content: "";
    border-radius: 100%;
    border-color: transparent white;
    border-width: 2px 2px 2px 2px;
    border-style: solid;
    animation: ${spin} 1s ease infinite;
    width: 30px;
    height: 30px;
  }
`;
