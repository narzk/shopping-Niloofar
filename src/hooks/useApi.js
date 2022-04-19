import React,{useState,useEffect} from 'react';

const useApi = (pageNumber) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const getUsers = async (pageNumber) => {
        setLoading(true);
        try {
          const response = await fetch(
            `http://xoosha.com/ws/1/test.php?offset=${pageNumber}`
          );
          const data = await response.json();
          const images = [];
          data?.map((item) => {images.push({image:item.image_url,name: item.name, price:item.price, productPage:item.url})
    
        });
        setData(prevData=>[...prevData,...images])
      } finally {
          setLoading(false);
        }
      };

      useEffect(() => {
        getUsers(pageNumber)
      }, [pageNumber])
 
    
    return {loading,data}
}


export default useApi;