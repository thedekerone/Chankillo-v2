import React from "react";
import { Form } from "./styles";
import { Button } from "styles/Button";

export const ContactForm = ({ width }) => {
  return (
    <Form onSubmit={(e) => e.preventDefault()} width={width}>
      <label>
        name
        <input type="text" name="name" id="name" placeholder="Full name" />
      </label>
      <label>
        email
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email@test.com"
        />
      </label>
      <label>
        phone
        <input
          type="phone"
          name="phone"
          id="phone"
          placeholder="+51 999 999 999"
        />
      </label>
      <Button
        width="100%"
        color="white"
        fontWeight="600"
        bHover="#249429"
        bActive="#1A771F"
        border="0"
        size="1.20rem"
        background="#248A29"
        padding="1.5rem 2rem"
      >
        SUBMIT
      </Button>
    </Form>
  );
};
