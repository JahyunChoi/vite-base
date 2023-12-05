import React from "react";
import Button from "./Button";
import styled from "styled-components";

function header() {
  return (
    <ContainerDiv>
      <Div>
        <Button>ARTX*</Button>
      </Div>
      <Div>
        <Button>홈화면</Button>
        <Button>작품관</Button>
        <Button>FQA</Button>
      </Div>
      <Div>
        <Button>윤미리님</Button>
        <Button>로그아웃</Button>
      </Div>
    </ContainerDiv>
  );
}

const ContainerDiv = styled.div`
  color: white;
  width: 100vw;
  height: 12vh;
  border: 1px solid red;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Div = styled.div`
  border: 1px solid red;
  height:auto;
  display: flex;
  flex-wrap: wrap;
`;

export default header;
