import React from "react";
import { Article, Text, Title, Content } from "./styles";
import { Thumb } from "components/VideoSection/styles";
import Link from "next/link";

export const Thumbnail = ({
  cover,
  title = "No title provided",
  description,
  slug,
  mini = false,
}) => {
  return (
    <Article mini={mini}>
      <Thumb src={cover}></Thumb>
      <Content mini={mini}>
        <Link href={"/post/" + slug}>
          <Title mini={mini}>{title}</Title>
        </Link>
        {description ? <Text>{description.slice(0, 100) + "..."}</Text> : ""}
      </Content>
    </Article>
  );
};
