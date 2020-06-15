import React, { useContext } from "react";
import { Wrapper, Slider } from "styles/Wrapper";
import {
  Video,
  VideoWrapper,
  Title,
  Text,
  VideoButton,
  VideoGrid,
} from "./styles";
import { Grid } from "components/Blog/styles";
import { Youtube } from "components/Context";
export const VideoSection = () => {
  const videos = useContext(Youtube);
  console.log(videos);
  return (
    <Wrapper
      maxWidth="1200px"
      heigth="300px"
      margin="10rem auto 3rem"
      width="100%"
      padding="1rem"
    >
      <Title>LATEST VIDEOS</Title>
      <VideoWrapper>
        <Wrapper>
          <Video
            width="100%"
            src={"https://www.youtube.com/embed/" + videos[0].id.videoId}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          ></Video>
        </Wrapper>
        <Wrapper height="100%" flex direction="column">
          <Title>How does the coronavirus affects the farm industry</Title>
          <Text>
            In this video wi discuss about the effects of the coronavirus over
            the farm industries, our speakers is some guy from a place that we
            don't know krappa.
          </Text>
          <Text>
            In this video wi discuss about the effects of the coronavirus over
            the farm industries, our speakers is some guy from a place that we
            don't know krappa
          </Text>
          <VideoButton
            border="0"
            background="#14B86B"
            padding=".8rem 7rem"
            color="white"
            fontWeight="bold"
          >
            <div className="sign">
              <i className="fas fa-arrow-right"></i>
            </div>
            WATCH RELATED
          </VideoButton>
        </Wrapper>
      </VideoWrapper>
      <Wrapper margin="3.8rem 0 0 0">
        <h3>RELATED VIDEOS</h3>

        <Slider margin="2rem 0">
          <Wrapper margin="0  0 0 0rem" display="inline-block" width="20rem">
            <Video
              width="100%"
              src="https://www.youtube.com/embed/mghV1_tksUU"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            ></Video>
            <h4>video title goes here</h4>
          </Wrapper>
          <Wrapper margin="0  0 0 3rem" display="inline-block" width="20rem">
            <Video
              width="100%"
              src="https://www.youtube.com/embed/mghV1_tksUU"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            ></Video>
            <h4>video title goes here</h4>
          </Wrapper>
          <Wrapper margin="0  0 0 3rem" display="inline-block" width="20rem">
            <Video
              width="100%"
              src="https://www.youtube.com/embed/mghV1_tksUU"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            ></Video>
            <h4>video title goes here</h4>
          </Wrapper>
        </Slider>
      </Wrapper>
    </Wrapper>
  );
};
