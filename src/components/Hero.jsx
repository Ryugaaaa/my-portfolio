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

`
const Title = styled.h1`

`
const WhatIDo = styled.div`

`
const Line = styled.img`

`
const Subtitle = styled.h2`

`
const Desc = styled.p`

`
const Button = styled.button`

`

const Right = styled.div`

`

const Hero = () => {
  return (
    <Section>
      <Navbar/>
      <Container>
        <Left>
          <Title>Junior Web-Developer</Title>
          <WhatIDo>
            <Line src={LinePng}/>
            <Subtitle>What I Do</Subtitle>
          </WhatIDo>
          <Desc>I Enjoying Creating Websites With React</Desc>
          <Button>Learn More</Button>
        </Left>
        <Right>

          <img src={MyCharacter}/>
        </Right>
      </Container>
    </Section>
  )
}

export default Hero