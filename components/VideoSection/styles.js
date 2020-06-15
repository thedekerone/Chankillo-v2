import styled from "styled-components";
import { Wrapper } from "styles/Wrapper";
import { Button } from "styles/Button";
import { Grid } from "components/Blog/styles";

export const Video = styled.iframe`
  width: 100%;
  border: 0;
  height: 100%;
  min-height: 10rem;
`;

export const Title = styled.h2`
  color: #5e5e5e;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

export const VideoWrapper = styled(Wrapper)`
  display: grid;
  grid-template: 25rem/1fr 1fr 1.5fr;
  gap: 3rem;
  & div:first-child {
    grid-column: 1 / span 2;
  }
  @media (max-width: 900px) {
    grid-template: 25rem 1fr / 1fr;
    & div:first-child {
      grid-column: 1 / span 1;
    }
  }
`;

export const Text = styled.p`
  color: #8e8e8e;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

export const VideoButton = styled(Button)`
  position: relative;
  margin-top: auto;
  align-self: flex-start;
  & .sign {
    position: absolute;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 300;
    height: 100%;
    width: 3rem;
    background: rgba(0, 0, 0, 0.16);
    right: 0;
    bottom: 0;
  }
  @media (max-width: 900px) {
    align-self: auto;
    margin-top: 2rem;
  }
`;
