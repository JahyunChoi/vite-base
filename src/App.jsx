import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import styled from "styled-components";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ContainerDiv>
        <Header />
        <Body />
        <Footer />
      </ContainerDiv>
    </div>
  );
}

const ContainerDiv = styled.div`
  color: white;
  width: 100vw;
  height: 100vh;
`;

export default App;
