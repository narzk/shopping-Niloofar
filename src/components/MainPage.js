import React, { useState } from "react";
import styled from "styled-components";
import { setConstantValue } from "typescript";
import Loading from "./Loading";
import NavBar from "./NavBar";
import PinContainer from "./PinContainer"


const Container=styled.div`

`

function MainPage({data,handleRef}) {
  const [value, setValue]=useState()
  return (
    <Container>
     <NavBar handelInputValue={val=>setValue(val)}/>
     <PinContainer images={data} filterVal={value} handleRef={handleRef}/>
    </Container>
  );
}

export default MainPage;
