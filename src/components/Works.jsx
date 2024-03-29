import React, { useState } from 'react'
import styled from "styled-components";
import Development from "./Development";
import SocialMedia from "./SocialMedia";
import WebDesign from "./WebDesign";

const data = [
  "Web Design",
  "Development",
  "Social Media"
]

const Section = styled.div`
 height: 100vh;
 scroll-snap-align: center;
 display: flex; 
 justify-content: center;
`

const Container = styled.div`
 width: 1400px;
 display: flex;
 justify-content: space-between;

 @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`

const Left = styled.div`
 flex: 1;
 display: flex;
 align-items: center;

 @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const ListItem = styled.li`
  font-size: 100px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  @media only screen and (max-width: 768px) {
    font-size: 40px;
    -webkit-text-stroke: 0.5px white;
  }

  ::after{
    content: "${(props)=>props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: white;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }
  
  &:hover{
    ::after{
      animation: fillText 0.5s linear both;

      @keyframes fillText {
        to{
          width: 100%;
        }
      }
    }
  }
`

const Right = styled.div`
 flex: 1;
`

const Works = () => {
  const [work,setWork] = useState("Web Design")
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
            <ListItem key={item} text={item} onClick={()=>setWork(item)}>
              {item}</ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {work === "Web Design" ? (<WebDesign/>) : work === "Development" ? (<Development/>) : (<SocialMedia/>)}
        </Right>
      </Container>
    </Section>
  )
}

export default Works