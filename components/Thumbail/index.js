import React from "react";
import { Article, Text, Title, Content } from "./styles";
import { Thumb } from "components/VideoSection/styles";
import { useNearScreen } from "utils/useNearScreen";
import Link from "next/link";
import { AnimatedWrapper } from "../../styles/AnimatedWrapper";

export const Thumbnail = ({
  cover,
  title = "No title provided",
  description,
  slug,
  delay,
  mini = false,
}) => {
  const [show, element] = useNearScreen();

  return (
    <AnimatedWrapper delay={delay} show={show} ref={element}>
      <Article mini={mini}>
        <Thumb src={cover}></Thumb>
        <Content mini={mini}>
          <Link href={"/post/" + slug}>
            <Title mini={mini}>
              <h2>{title}</h2>
            </Title>
          </Link>
          {description ? <Text>{description.slice(0, 100) + "..."}</Text> : ""}
        </Content>
      </Article>
    </AnimatedWrapper>
  );
};
