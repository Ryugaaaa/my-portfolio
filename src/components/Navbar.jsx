import React, { useRef } from 'react'
import styled from 'styled-components'
import SearchIcon from './assets/img/search.png'
import MyLogo from './assets/img/me.png'
import MySection from "./Who"

const Section = styled.div`
    display: flex;
    justify-content: center;
`

const Container = styled.div`
 width: 1400px;
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 15px 0px;
`

const Links = styled.div`
display: flex;
align-items: center;
gap: 50px;
`

const Logo = styled.img`
height: 40px;
`

const List = styled.ul`
display: flex;
gap: 20px;
list-style: none;
`

const ListItem = styled.li`
cursor: pointer;
`

const Icons = styled.div`
display: flex;
align-items: center;
gap: 20px;
`

const Icon = styled.img`
width: 25px;
cursor: pointer;
`
const Button = styled.button`
width: 120px;
padding: 10px;
background-color: #da4ea2;
color: white;
border: none;
border-radius: 5px;
cursor: pointer;
&:hover {
    transition: 0.5s;
    background-color: #ff59bd;
}
`


const Navbar = () => {

        const ref = useRef(null);
      
        const handleClick = () => {
          ref.current?.scrollIntoView({behavior: 'smooth'});
        };

  return (
    <Section>
        <Container>
            <Links> 
            <Logo src={MyLogo}/>
            <List>  
                <ListItem onClick={handleClick}>Home</ListItem> 
                <ListItem>Me</ListItem>
                <ListItem>Works</ListItem>
                <ListItem>Contact</ListItem>
            </List>
            </Links>
            <Icons>
                <Icon src={SearchIcon}/>
                <a href='https://www.linkedin.com/in/tato-robakidze-80631a255/' target="_blank" rel="noopener noreferrer">
                <Button>Hire Me Now</Button>
                </a>
            </Icons>
        </Container>
    </Section>
  )
}

export default Navbar