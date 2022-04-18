import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { setConstantValue } from "typescript";
import Pin from "./Pin";

const Container = styled.div`
  display: flex;
  height: 50px;
  padding: 10px;
  width: 100%;
  align-items: center;
  margin:10px 0px;
`;
const Input = styled.input`
  flex: 1;
  border-radius: 32px;
  border: 1px solid #858585;
  background-color: #ffff;
  margin:0px 20px;
  padding: 20px 40px;
`;
const Button = styled.button`
padding: 20px 0px;
border-radius: 36px;
min-width: 100px;
margin:0px 10px;
text-align: center;
border:none;
background-color: black;
color: white;
cursor: pointer;
&:active{
    background-color: #fff;
    color:black;
}
`;
const Profile = styled.button`
padding: 20px;
border-radius: 100%;
margin:0px 10px;
border: 1px solid black;

background-color: white;
color: black;
`;
function NavBar({handelInputValue}) {
  return (
    <Container>
      <Button>Home</Button>
      <Button>About Us</Button>

       <Input placeholder="search Here ..." onChange={e=>handelInputValue(e.target.value)}/>
      <Button>Contact us</Button>
      <Profile>Profile</Profile>

    </Container>
  );
}

export default NavBar;
