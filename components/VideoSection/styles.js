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

export const Thumb = styled.div`
  width: 100%;
  border: 0;
  height: 0;
  padding: 55% 0 0 0;
  background: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

export const Title = styled.h2`
  color: ${(props) => (props.dark ? null : "#109356")};
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2.5rem;
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
  font-size: 1rem;
  margin-bottom: 1rem;
`;

export const Anchor = styled.a`
  margin-top: auto;
  display: block;
`;

export const VideoButton = styled(Button)`
  position: relative;
  margin-top: auto;
  transition: 0.2s;
  overflow: hidden;
  &:hover {
    background: #109356;
  }
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
    background: #109356;
    right: 0;
    z-index: 2;
    bottom: 0;
  }

  @media (max-width: 900px) {
    align-self: auto;
    margin-top: 2rem;
  }
`;

export const PostTitle = styled.h4`
  margin-top: 1rem;
  white-space: normal;
  color: #585858;
  line-height: 1.5rem;
`;
