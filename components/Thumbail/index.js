import React from "react";
import { Article, Text, Title, Content } from "./styles";
import { Thumb } from "components/VideoSection/styles";
import Link from "next/link";

export const Thumbnail = ({
  cover,
  title = "No title provided",
  description = "No description provided",
  slug,
}) => {
  return (
    <Article>
      <Thumb src={cover}></Thumb>
      <Content>
        <Link href={"post/" + slug}>
          <Title>{title}</Title>
        </Link>
        <Text>{description.slice(0, 100) + "..."}</Text>
      </Content>
    </Article>
  );
};
