import React, { useState } from "react";
import { TimeLine } from "components/TimeLine";
import { Wrapper } from "styles/Wrapper";
import { Layout } from "components/Layout";
import {ProductInfo} from "components/ProductInfo"
import { FruitState } from "components/FruitState";

export default () => {
  const [time, setTime] = useState(1);
  return (
    <Layout>
        <ProductInfo content="
The Kent mango has a widened ovoid fruit. The skin has a yellow background color with red veneer.
The average weight of these fruits considering the loaded tree is from 470 to 550 gr.
The pulp is low in fiber and adapts very well to eating with a spoon. The seed size is small. The fruit of this variety has an excellent quality and a long commercial life. The Kent mango is a tree of erect growth and medium vigor.

In the composition of the mango it is worth highlighting the amount of provitamin A that it contributes, which helps, among other things, to vision, preventing night blindness and the maintenance of the epithelia and skin. It also has antioxidant effects, such as vitamin C, which is also abundant in this fruit.
It also has vitamin E (although in a lesser amount) but thanks to this, we can say that containing both vitamins A, C and E it has one of the best trios of known natural antioxidants.
Due to its specific composition, mango is a special food for the skin: provitamin A and its relationship with tissue maintenance, as well as the antioxidant properties of vitamins C and E, in conjunction with the moisturizing properties of mango. and its organic acids and aromatic substances, are really beneficial nutrients for the skin
In addition, vitamin A also helps retinal conditions since it is a structural element of the retina and its availability is enhanced with the presence of vitamins C and E."></ProductInfo>

      <Wrapper
        height="40rem"
        lg_height="55rem"
        width="100%"
        padding="1rem 1.5rem"
      >
        {/* <TimeLine time={time} setTime={setTime}></TimeLine> */}
        <FruitState
          time={time}
          setTime={setTime}
          title="Fundo Oskar"
          images={["/images/camp1.jpg", "/images/camp2.jpg"]}
          content="Located on Yautan, Casma. It has the perfect weather for the growing of mangoes."
          show={time == 1}
        ></FruitState>
        <FruitState
          time={time}
          setTime={setTime}
          title="Fundo El Molinero"
          images={["/images/camp1.jpg", "/images/camp2.jpg"]}
          content="Lore ipsum ga ets luminous in tenebris lucet krappa 123"
          show={time == 2}
        ></FruitState>
        <FruitState
          time={time}
          setTime={setTime}
          title="Fundo Dago"
          images={["/images/camp1.jpg", "/images/camp2.jpg"]}
          content="Lore ipsum ga ets luminous in tenebris lucet krappa 123"
          show={time == 3}
        ></FruitState>
        <FruitState
          time={time}
          setTime={setTime}
          title="Fundo Efer"
          images={["/images/camp1.jpg", "/images/camp2.jpg"]}
          content="Lore ipsum ga ets luminous in tenebris lucet krappa 123"
          show={time == 4}
        ></FruitState>
        <FruitState
          time={time}
          setTime={setTime}
          title="Fundo William"
          images={["/images/camp1.jpg", "/images/camp2.jpg"]}
          content="Lore ipsum ga ets luminous in tenebris lucet krappa 123"
          show={time == 5}
        ></FruitState>
      </Wrapper>
    </Layout>
  );
};
