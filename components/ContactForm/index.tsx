import React, { useState, useLayoutEffect } from "react";
import { Form, Message, CompletedAnimated } from "./styles";
import { Button } from "styles/Button";
import { Input } from "components/Input";
import { Wrapper } from "styles/Wrapper";
import {BsCheckCircle} from "react-icons/bs"

export const ContactForm = ({ width }:{width?:any}) => {
  const [sent, setSent] = useState(null);
  const [state, setState] = useState({ name: "", email: "", phone: "" });
  const handlechange = (event) => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handlePress = () => {
    setSent(true)
    try {
      fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: state.name,
          email: state.email,
          phone: state.phone,
        }),
      }).then((res)=>{
        setSent(false)
        setTimeout(()=>{setSent(null);},2000 )
      });
    } catch (error) {
      setSent(false)
      console.log(error);
    }
  };
  return (
    <React.Fragment>

    <Form
      onSubmit={(e) => {
        e.preventDefault();
        handlePress();
      }}
      width="32rem"
    >
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
      <Wrapper position="relative">
        {sent && <CompletedAnimated></CompletedAnimated> } 
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
      </Wrapper>
    </Form>
      {sent===false && <Message><BsCheckCircle size="25"></BsCheckCircle> Email sent</Message> } 

    </React.Fragment>
  );
};
