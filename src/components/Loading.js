import React from "react";
import styled from "styled-components";

const Container=styled.div`

 display: grid;
 grid-template-columns: repeat(auto-fill, 250px);
 margin: 0px;
 padding: 0px;
 grid-auto-rows: 10px;
 justify-content: center;
 grid-gap: 5px;
`
const ImageSkeleton = styled.div`
margin: 15px 10px;
  padding: 0;
  border-radius: 16px;
  grid-row-end: span ${props=>props.size==='s'?25:props.size==='m'?33:45};
  /* max-width: 200px; */
background-color: #bfbfbf;
`
function Loading() {
  return (
    <Container>
        <ImageSkeleton size="s"/>
        <ImageSkeleton size="m"/>
        <ImageSkeleton size="l"/>
        <ImageSkeleton size="s"/>
        <ImageSkeleton size="m"/>
        <ImageSkeleton size="l"/>
        <ImageSkeleton size="s"/>
        <ImageSkeleton size="m"/>
        <ImageSkeleton size="l"/>
        <ImageSkeleton size="s"/>
        <ImageSkeleton size="m"/>
     

    </Container>
  );
}

export default Loading;
