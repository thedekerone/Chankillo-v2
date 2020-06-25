import React from "react";
import { Wrapper } from "styles/Wrapper";
import { Title } from "./styles";

export const Certifications = () => {
  return (
    <Wrapper maxWidth="1200px" width="100%" margin="8rem auto">
      <Title>CERTIFICATIONS</Title>
      <Wrapper
        flex
        lg_direction="column"
        width="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        <div>
          <img
            src="https://www.globalgap.org/export/sites/default/.content/.galleries/Newsletter_Pics/2016_January/GLOBALG.A.P._Logo_235px.png_1885313712.png"
            alt=""
            width="100%"
          />
        </div>
        <div>
          <img
            width="100%"
            src="https://www.altarproduce.com/app/uploads/2019/10/gapgrasp.png"
            alt=""
          />
        </div>
        <div>
          <img
            width="100%"
            src="https://www.globalgap.org/export/sites/default/.content/.galleries/Newsletter_Pics/2016_January/GLOBALG.A.P._Logo_235px.png_1885313712.png"
            alt=""
          />
        </div>
      </Wrapper>
    </Wrapper>
  );
};
