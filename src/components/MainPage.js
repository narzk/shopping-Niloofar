import React, { useState } from "react";
import styled from "styled-components";
import { setConstantValue } from "typescript";
import Loading from "./Loading";
import NavBar from "./NavBar";
import PinContainer from "./PinContainer"


const Container=styled.div`

`

function MainPage({data,loading}) {
  const [value, setValue]=useState()
  return (
    <Container>
        <NavBar handelInputValue={val=>setValue(val)}/>
       {loading?<Loading/>: <PinContainer images={data} filterVal={value}/>}
    </Container>
  );
}

export default MainPage;
