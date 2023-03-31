import React, { useRef, useState } from 'react';
import styled from "styled-components";
import emailjs from '@emailjs/browser';
import Logo from "./assets/img/logo.png"

const Section = styled.div`
 height: 100vh;
 scroll-snap-align: center;
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 50px;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const Title = styled.h1`
  font-weight: lighter;
`

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`

const Input = styled.input`
  padding: 20px;
  background-color: #e9e9e9;
  border: none;
  border-radius: 5px;
`

const TextArea = styled.textarea`
  padding: 20px;
  background-color: #e9e9e9;
  border: none;
  border-radius: 5px;
`

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
  &:hover {
    transition: 0.5s;
    background-color: #ff59bd;
  }
`

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ReactLogo = styled.img`
    animation: rotate 60s infinite alternate;
  @keyframes rotate {
    from{
      rotate: 0deg;
    }
      to{
        rotate: 360deg;
      }
  }
`

function Contact() {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h35pmlq",
        "template_kbb1wia",
        ref.current,
        "VFKk5-KpAKgKtXszj"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };
  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Me</Title>
            <Input placeholder='Name' name='name'/>
            <Input placeholder='Email' name='email' />
            <TextArea placeholder='Write Your Message' name='message' rows={10} />
            <Button type='submit'>Send</Button>
            {success && 
            "Your Message Has Been Sent. I'll Get Back To You Soon :)"}
          </Form>
        </Left>
        <Right>
          <ReactLogo src={Logo} />
        </Right>
      </Container>
    </Section>
  );
}

export default Contact