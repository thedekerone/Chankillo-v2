import React, { useState } from "react";
import { Form } from "./styles";
import { Button } from "styles/Button";
import { Input } from "components/Input";

export const ContactForm = ({ width }) => {
  const [focused, setFocused] = useState(false);
  return (
    <Form onSubmit={(e) => e.preventDefault()} width="32rem">
      <Input type="text" name="name" placeholder="First Name"></Input>
      <Input type="email" name="email" placeholder="example@gmail.com"></Input>
      <Input type="phone" name="phone" placeholder="+51 999 999 999"></Input>

      <Button
        width="100%"
        color="white"
        fontWeight="600"
        bHover="#12A561"
        bActive="#0E814B"
        border="0"
        size="1.20rem"
        background="#109356"
        padding="1.5rem 2rem"
      >
        SUBMIT
      </Button>
    </Form>
  );
};
