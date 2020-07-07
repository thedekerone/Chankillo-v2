import React, { useState, useLayoutEffect } from "react";
import { Form, Message } from "./styles";
import { Button } from "styles/Button";
import { Input } from "components/Input";

export const ContactForm = ({ width }) => {
  const [focused, setFocused] = useState(false);
  const [state, setState] = useState({ name: "", email: "", phone: "" });
  const [message, setMessage] = useState("");
  const handlechange = (event) => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handlePress = () => {
    try {
      fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: state.name,
          email: state.email,
          phone: state.phone,
        }),
      });
      console.log("EMAIL SENT!");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        message.length < 1 && handlePress();
        setMessage("Email sent");
      }}
      width="32rem"
    >
      <Message>{message}</Message>
      <Input
        type="text"
        name="name"
        handlechange={handlechange}
        placeholder="First Name"
      ></Input>
      <Input
        type="email"
        name="email"
        handlechange={handlechange}
        placeholder="example@gmail.com"
      ></Input>
      <Input
        type="phone"
        name="phone"
        handlechange={handlechange}
        placeholder="+51 999 999 999"
      ></Input>

      <Button
        width="100%"
        color="white"
        fontWeight="600"
        bHover="#14B86B"
        bActive="#109356"
        border="0"
        size="1.20rem"
        background="#12A561"
        padding="1.5rem 2rem"
      >
        SUBMIT
      </Button>
    </Form>
  );
};
