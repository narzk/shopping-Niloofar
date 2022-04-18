import React from "react";
import styled from "styled-components";

const Image = styled.img`
  padding: 0;
  border-radius: 16px;
  grid-row-end: span 26;
  max-width: 200px;
  position: absolute;
  overflow: hidden;
  cursor: zoom-in;
  z-index: 1111;

  &:hover{
    opacity: 0.5;
  }
`;
const Container=styled.div`
margin: 15px 10px;
  padding: 0;
  border-radius: 16px;
  grid-row-end: span 26;
  max-height: 300px;
  max-width: 200px;
  position: relative;
  &:hover{

    /* background-color: #BFBFBF; */
  }
`
const ProductName=styled.div`
position: absolute;
top:20px;
left:10px;
right: 10px;
text-align: center;
background-color: #fff;
max-width: 200px;

`
const Price=styled.div`
position: absolute;
bottom:50px;
left:10px;
right: 10px;
text-align: center;
background-color: #fff;
max-width: 200px;
font-size: 30px;

`
function Pin({ url, name, price,productPage }) {

  return (
    <Container onClick={()=>window.location.href = productPage}>
      <Image src={url}  />
      <ProductName>{name}</ProductName>
      <Price>{price?price:"No Price"}</Price>
    </Container>
  );
}

export default Pin;
