import React from "react";
import { TimeLine } from "components/TimeLine";
import { Wrapper } from "styles/Wrapper";
import { Layout } from "components/Layout";

export default () => {
  return (
    <Layout>
      <Wrapper padding="5rem 1rem">
        <TimeLine></TimeLine>
        <Wrapper maxWidth="1000px" width="100#" margin="2rem auto">
          <h2>Growing stage</h2>
          <p>Lore ipsum ga ets luminous in tenebris lucet krappa 123</p>
          <img src="/images/camp1.jpg" width="100%" alt="TEST IMG" />
          <img src="/images/camp2.jpg" width="100%" alt="TEST IMG" />
          <img src="/images/camp3.jpg" width="100%" alt="TEST IMG" />
        </Wrapper>
      </Wrapper>
    </Layout>
  );
};
