import styled from "styled-components";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";

const Container = styled.div`
 height: 100vh;
 scroll-snap-type: y mandatory;
 scroll-behavior: smooth;
 overflow-y: auto;
 scrollbar-width: none;
 color: white;
 background: linear-gradient(to right top, #090046, #040545, #010b44, #000f42, #001240, #041343, #081545, #0d1648, #1a154f, #281256, #360c5b, #45005e);
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