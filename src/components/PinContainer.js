import React, { useEffect } from "react";
import styled from "styled-components";
import Pin from "./Pin";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  margin: 0px;
  padding: 0px;
  grid-auto-rows: 10px;
  justify-content: center;
  grid-gap: 4px;
`;
const NoResult = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  @media (max-width: 768px) {
  left: 39%;

  }
`;
function PinContainer({ images, filterVal, handleRef }) {
  return (
    <Container>
      {filterVal ? (
        images.filter((product) =>
          product.name.toLowerCase().includes(filterVal.toLowerCase())
        ).length > 0 ? (
          images
            .filter((product) =>
              product.name.toLowerCase().includes(filterVal.toLowerCase())
            )
            .map((pr) => <Pin url={pr.image} name={pr.name} price={pr.price} />)
        ) : (
          <NoResult>Nothing Found! :(</NoResult>
        )
      ) : (
        images.map((product, index) => {
          if (images.length === index + 1) {
            return (
              <div ref={handleRef}>
                <Pin
                  url={product.image}
                  name={product.name}
                  price={product.price}
                  productPage={product.productPage}
                />
              </div>
            );
          } else {
            return (
              <Pin
                url={product.image}
                name={product.name}
                price={product.price}
                productPage={product.productPage}
              />
            );
          }
        })
      )}
    </Container>
  );
}

export default PinContainer;
