import styled from "styled-components";

export const Title = styled.h2`
  font-size: 2.25rem;
  font-weight: 600;
  color: #484848;
  margin-bottom: 1.5rem;
`;

export const Text = styled.p`
  color: #858585;
  line-height: 2rem;
  font-size: 1.125rem;
`;

export const Partial = styled.div`
  position: absolute;
  clip-path: polygon(23% 0, 100% 0, 100% 100%, 0% 100%);
  background: url("images/mango.png");
  background-size: cover;
  background-position: center center;
  height: 100%;
  width: 49%;
  min-width: 38rem;
  z-index: 1;
  right: 0;
  top: 0;
  @media (max-width: 900px) {
    clip-path: polygon(0 44%, 100% 0, 100% 100%, 0% 100%);
    width: 140%;
    height: 50%;
    top: auto;
    bottom: 0;
    min-width: auto;
  }
`;
