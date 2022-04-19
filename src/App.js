import React, { useEffect, useRef, useState, useCallback } from "react";
import Loading from "./components/Loading";
import MainPage from "./components/MainPage";
import Pgination from "./components/Pagination";
import useApi from "./hooks/useApi";
function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const { loading, data } = useApi(pageNumber);

  const lastElement = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading]
  );
  const observer = useRef();
  return (
    <>
      <MainPage data={data} loading={loading} handleRef={lastElement} />
      {loading && <Loading />}
    </>
  );
}

export default App;
