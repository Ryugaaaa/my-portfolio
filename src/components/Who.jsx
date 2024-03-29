import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react'
import styled from "styled-components";
import Cube from './Cube';
import { useState } from 'react';

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

  @media only screen and (max-width: 768px) {
    display: none;
  }
`
const Title = styled.h1`
  font-size: 60px;

  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`

const Right = styled.div`
  flex: 1; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
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
    width: 150px;
    height: 50px;
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
  const [buttonText, setButtonText] = useState('Contact');

  function handleClick() {
    setButtonText('+995 551 32 98 32');
  }

  return (
    <Section>
      <Container>
        <Left>
          <Canvas camera={{fov:25, position:[5, 5, 5]}}>
            <OrbitControls enableZoom={false} autoRotate/>
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Cube/>
          </Canvas>
        </Left>
        <Right>
          <Title>Hello World!</Title>
          <WhatIDo>
            <Subtitle>Who I Am</Subtitle>
          </WhatIDo>
          <Desc>I'm Junior Web-Developer, Who Works With React.</Desc>
          <Button onClick={handleClick}>{buttonText}</Button>
        </Right>
      </Container>
    </Section>
  )
}

export default Who;