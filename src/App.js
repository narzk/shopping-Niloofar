import React, { useEffect, useState } from "react";
import MainPage from "./components/MainPage";
import Pgination from "./components/Pagination";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getUsers = async (number) => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://xoosha.com/ws/1/test.php?offset=${number}`
      );
      const data = await response.json();
      const images = [];
      data?.map((item) => {images.push({image:item.image_url,name: item.name, price:item.price, productPage:item.url})
      });
      setData(images);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getUsers(0);

  }, []);

  return (
     <>
      <MainPage data={data} loading={loading}/>
     <Pgination handleClick={(offset)=>{
        window.scrollTo(0, 0)
       getUsers(offset)}}/>
     </>
  );
}

export default App;
