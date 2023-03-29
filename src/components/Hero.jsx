import React from 'react'
import styled from "styled-components";
import Navbar from './Navbar';
import LinePng from './assets/img/line.png'
import MyCharacter from './assets/img/mycharacter.png'

const Section = styled.div`
 height: 100vh;
 scroll-snap-align: center;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: space-between;
`

const Container = styled.div`
 height: 100vh;
 scroll-snap-align: center;
 width: 1400px;
 display: flex;
 justify-content: space-between;
`
const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`
const Title = styled.h1`
  font-size: 80px;
`
const WhatIDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
const Line = styled.img`
  height: 5px;
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

const Right = styled.div`
  flex: 2; 
  position: relative;
`

const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  @keyframes animate {
    to{
      transform: translateY(20px);
    }
  }
`

const Hero = () => {
  return (
    <Section>
      <Navbar/>
      <Container>
        <Left>
          <Title>Junior Web Developer</Title>
          <WhatIDo>
            <Line src={LinePng}/>
            <Subtitle>What I Do</Subtitle>
          </WhatIDo>
          <Desc>I Enjoy Creating Websites With React.</Desc>
          <Button>Learn More</Button>
        </Left>
        <Right>

          <Img src={MyCharacter}/>
        </Right>
      </Container>
    </Section>
  )
}

export default Hero