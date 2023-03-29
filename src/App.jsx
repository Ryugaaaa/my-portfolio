import styled from "styled-components";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import "./assets/img/bg.jpg";

const Container = styled.div`
 height: 100vh;
 scroll-snap-type: y mandatory;
 scroll-behavior: smooth;
 overflow-y: auto;
 scrollbar-width: none;
 color: white;
 background: radial-gradient(circle, rgba(0,0,120,1) 0%, rgba(8,69,75,1) 100%);
 &::-webkit-scrollbar{
  display: none;
 }
`


function App() {
  return (
    <Container>
    <Hero/>
    <Who/>
    <Works/>
    <Contact/>
    </Container>
  );
}

export default App;