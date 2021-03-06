import React from "react";
import { Wrapper } from "styles/Wrapper";
import { Title } from "./styles";
import { useNearScreen } from "utils/useNearScreen";
import { AnimatedWrapper } from "../../styles/AnimatedWrapper";

export const Certifications = () => {
  const [show, element] = useNearScreen();

  return (
    <Wrapper ref={element} maxWidth="1200px" width="100%" margin="8rem auto">
      <Title>CERTIFICATIONS</Title>
      <Wrapper
        flex
        lg_direction="column"
        width="100%"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <AnimatedWrapper show={show} maxWidth="14rem" width="100%">
          <img
            src={require("public/images/ggap.png?webp")}
            alt="Globalgap"
            width="100%"
          />
        </AnimatedWrapper>
        <AnimatedWrapper show={show} maxWidth="14rem" width="100%">
          <img
            src={require("public/images/grasp2.png?webp")}
            width="100%"
            alt="Grasp"
          />
        </AnimatedWrapper>
        <AnimatedWrapper show={show} maxWidth="14rem" width="100%">
          <img
            src={require("public/images/ggap.png?webp")}
            width="100%"
            alt="Globalgap"
          />
        </AnimatedWrapper>
        {/* <div>
          <img src="/images/ggap.png" alt="" width="150px" />
        </div> */}
      </Wrapper>
    </Wrapper>
  );
};
