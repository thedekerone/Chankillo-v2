import styled, { css } from "styled-components";

export const Article = styled.div`
  background: ${(props) => (props.mini ? "" : "white")};
  width: 100%;
  height: 100%;
  ${(props) =>
    props.mini
      ? ""
      : css`
          -webkit-box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.05);
          -moz-box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.05);
          box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.05);
        `};
`;

export const Content = styled.div`
  padding: ${(props) => (props.mini ? "0.6rem 0" : "0.6rem 1rem")};
`;

export const Title = styled.a`
  font-weight: 600;
  display: block;
  margin: 0.4rem 0 0.8rem;

  & h2 {
    font-size: ${(props) => (props.mini ? "1rem" : "1.7rem")};
  }

  & h2:hover {
    color: #1c885f;
  }
`;

export const Text = styled.p`
  font-size: 1rem;
  line-height: 2.25rem;
`;

export const Cover = styled.div``;
