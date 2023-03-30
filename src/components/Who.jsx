import React from 'react'
import styled from "styled-components";

const Section = styled.div`
 height: 100vh;
 scroll-snap-align: center;
 display: flex;
 justify-content: center;
`

const Container = styled.div`
 height: 100vh;
 scroll-snap-align: center;
 width: 1400px;
 display: flex;
 justify-content: space-between;
`
const Left = styled.div`
  flex: 1;
`
const Title = styled.h1`
  font-size: 60px;
`

const Right = styled.div`
  flex: 1; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  `

  const WhatIDo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
  `
  
  const Subtitle = styled.h2`
    color: #da4ea2;
  `
  
  const Desc = styled.p`
    font-size: 24px;
    color: lightgray;
  `
  
  const Button = styled.button`
    background-color: #da4ea2;
    color: white;
    font-weight: 500;
    width: 100px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      transition: 0.5s;
      background-color: #ff59bd;
    }
  `

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
        </Left>
        <Right>
          <Title>Hello World!</Title>
          <WhatIDo>
            <Subtitle>Who I Am</Subtitle>
          </WhatIDo>
          <Desc>I'm Junior Web-Developer, Who Works With React.</Desc>
          <a href="https://www.google.com">
          <Button>Contact Me</Button>
          </a>
        </Right>
      </Container>
    </Section>
  )
}

export default Who;