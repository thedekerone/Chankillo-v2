import styled from "styled-components";

export const Article = styled.div`
  background: white;
  width: 100%;
  -webkit-box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.1);
`;

export const Content = styled.div`
  padding: 0.6rem 1rem;
`;

export const Title = styled.header`
  font-size: 1.5rem;
  font-weight: 600;
  color: #3d3d3d;
  margin: 0.4rem 0 0.8rem;
`;

export const Text = styled.p`
  font-size: 0.9rem;
  line-height: 2.25rem;
  color: #858585;
`;
