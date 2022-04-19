import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { setConstantValue } from "typescript";
import Pin from "./Pin";

const Container = styled.div`
  display: flex;
  height: 50px;
  padding: 10px;
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
    border:1px solid black;
}
@media (max-width: 768px) {
  display: none;
  }
`;
const Profile = styled.button`
padding: 20px;
border-radius: 100%;
margin:0px 10px;
border: 1px solid black;

background-color: white;
color: black;
@media (max-width: 768px) {
  display: none;
  }
`;
const HumbergerButton = styled.div`
border: none;
&>div{
  width:20px;
  height: 2px;
  background-color: black;
  margin-bottom:5px ;
}
@media (min-width: 768px) {
  display: none;
  }
`;
const Menu=styled.ul`
width:50%;
height:100vh;
background-color: white;
position: absolute;
border-right:2px solid #ccc;
top:0;
left:0;
display: ${props=>props.open?'flex':'none'};
flex-direction: column;
padding: 70px 10px;
align-items: center;
z-index: 99999999;
margin-top:0;
&>i{
margin-bottom:20px;
border-bottom:2px solid #ccc;
}
`
function NavBar({handelInputValue}) {
  const [openMenu,setOpenMenu]=useState(false)
  return (
    <Container>
<HumbergerButton onClick={()=>setOpenMenu(!openMenu)}>
  <div></div>
  <div></div>
  <div></div>
</HumbergerButton>
<Menu open={openMenu}>
<i onClick={()=>setOpenMenu(!openMenu)}>Profile</i>
<i onClick={()=>setOpenMenu(!openMenu)}>Home</i>
<i onClick={()=>setOpenMenu(!openMenu)}>ContactUs</i>
<i onClick={()=>setOpenMenu(!openMenu)}>About US</i>
</Menu>
      <Button>Home</Button>
      <Button>About Us</Button>
       <Input placeholder="search Here ..." onChange={e=>handelInputValue(e.target.value)}/>
      <Button>Contact us</Button>
      <Profile>Profile</Profile>
    </Container>
  );
}

export default NavBar;
