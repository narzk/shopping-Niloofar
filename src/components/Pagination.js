import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: fixed;
bottom: 0;
width: 100%;
z-index: 99999;
padding: 10px 0px;
background-color: white;
&>button{
    margin-right:5px;
}
`;
const PaginationButton = styled.button`
background-color: ${props=>props.isActive && '#ccc'};
width:50;
height: 50;
border-radius: 100%;
border: 2px solid #ccc;
cursor: pointer;
&:hover{
    background-color: #ccc;
}

`;
function Pgination({handleClick}) {
    const [pageNumber, setPageNumber]=useState(1)
    const pageNumberArrays=[1,2,3,4,5]
  return (
    <Container>

        {
            pageNumberArrays.map(pageArr=>
                <PaginationButton isActive={pageNumber===pageArr} onClick={()=>{handleClick(pageArr)
    
                    setPageNumber(pageArr)}}>{pageArr}</PaginationButton>
                )
        }
    
      
    </Container>
  );
}

export default Pgination;
