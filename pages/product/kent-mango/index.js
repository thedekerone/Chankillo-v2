import React, { useState } from "react";
import { TimeLine } from "components/TimeLine";
import { Wrapper } from "styles/Wrapper";
import { Layout } from "components/Layout";
import { FruitState } from "../../../components/FruitState";

export default () => {
  const [time, setTime] = useState(1);
  return (
    <Layout>
      <Wrapper padding="5rem 1rem">
        <TimeLine time={time} setTime={setTime}></TimeLine>
        <FruitState
          time={time}
          setTime={setTime}
          title="Growing stage 1"
          images={["/images/camp1.jpg", "/images/camp2.jpg"]}
          content="Lore ipsum ga ets luminous in tenebris lucet krappa 123"
          show={time == 1}
        ></FruitState>
        <FruitState
          time={time}
          setTime={setTime}
          title="Growing stage 2"
          images={["/images/camp1.jpg", "/images/camp2.jpg"]}
          content="Lore ipsum ga ets luminous in tenebris lucet krappa 123"
          show={time == 2}
        ></FruitState>
        <FruitState
          time={time}
          setTime={setTime}
          title="Growing stage 3"
          images={["/images/camp1.jpg", "/images/camp2.jpg"]}
          content="Lore ipsum ga ets luminous in tenebris lucet krappa 123"
          show={time == 3}
        ></FruitState>
        <FruitState
          time={time}
          setTime={setTime}
          title="Growing stage 4"
          images={["/images/camp1.jpg", "/images/camp2.jpg"]}
          content="Lore ipsum ga ets luminous in tenebris lucet krappa 123"
          show={time == 4}
        ></FruitState>
        <FruitState
          time={time}
          setTime={setTime}
          title="Growing stage 5"
          images={["/images/camp1.jpg", "/images/camp2.jpg"]}
          content="Lore ipsum ga ets luminous in tenebris lucet krappa 123"
          show={time == 5}
        ></FruitState>
        <FruitState
          time={time}
          setTime={setTime}
          title="Growing stage 6"
          images={["/images/camp1.jpg", "/images/camp2.jpg"]}
          content="Lore ipsum ga ets luminous in tenebris lucet krappa 123"
          show={time == 6}
        ></FruitState>
        <FruitState
          time={time}
          setTime={setTime}
          title="Growing stage 7"
          images={["/images/camp1.jpg", "/images/camp2.jpg"]}
          content="Lore ipsum ga ets luminous in tenebris lucet krappa 123"
          show={time == 7}
        ></FruitState>
      </Wrapper>
    </Layout>
  );
};
