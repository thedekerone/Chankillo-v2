import React, { useContext } from "react";
import { Wrapper, Slider } from "styles/Wrapper";
import { useNearScreen } from "utils/useNearScreen";
import { FaArrowRight } from "react-icons/fa";
import Router from "next/router";
import {
  Video,
  VideoWrapper,
  Title,
  Text,
  VideoButton,
  VideoGrid,
  Thumb,
  PostTitle,
  Anchor,
} from "./styles";
import { Youtube } from "components/Context";
import { AnimatedWrapper } from "../../styles/AnimatedWrapper";
export const VideoSection = () => {
  const [show, element] = useNearScreen();
  const { videos } = useContext(Youtube);
  return (
    <AnimatedWrapper
      maxWidth="1200px"
      heigth="300px"
      margin="10rem auto 3rem"
      show={show}
      ref={element}
      width="100%"
      padding="1rem"
    >
      <Title>LATEST VIDEOS</Title>
      <VideoWrapper>
        <Wrapper>
          <Video
            width="100%"
            src={videos[0].url}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          ></Video>
        </Wrapper>
        <Wrapper height="100%" flex direction="column">
          <Title dark>{videos[0].title}</Title>
          <Text>{videos[0].description}</Text>
          <Anchor href="https://www.youtube.com/channel/UCg0gsaTRZY8if77FlHoj8ag">
            <VideoButton
              border="0"
              background="#14B86B"
              padding=".8rem 7rem"
              color="white"
              fontWeight="bold"
            >
              <div className="sign">
                <FaArrowRight />
              </div>
              VISIT CHANNEL
            </VideoButton>
          </Anchor>
        </Wrapper>
      </VideoWrapper>

      {/* <Wrapper margin="3.8rem 0 0 0">
        <h3>FEATURED VIDEOS</h3>

        <Slider margin="2rem 0">
          <Wrapper margin="0  0 0 0rem" display="inline-block" width="20rem">
            <Thumb src={videos[1].imgPath}></Thumb>
            <PostTitle>{videos[1].title}</PostTitle>
          </Wrapper>

          <Wrapper margin="0  0 0 3rem" display="inline-block" width="20rem">
            <Thumb src={videos[0].imgPath}></Thumb>
            <PostTitle>{videos[0].title}</PostTitle>
          </Wrapper>

          <Wrapper margin="0  0 0 3rem" display="inline-block" width="20rem">
            <Thumb src={videos[1].imgPath}></Thumb>
            <PostTitle>{videos[1].title}</PostTitle>
          </Wrapper>
        </Slider>
      </Wrapper> */}
    </AnimatedWrapper>
  );
};
