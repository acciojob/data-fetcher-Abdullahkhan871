import React, { useEffect, useState } from "react";
import "./../styles/App.css";
import axios from "axios";

const App = () => {
  const [fetchData, setFetchData] = useState("");
  const [error, setError] = useState(true);
  const [show, setShow] = useState();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((response) => setFetchData(response))
      .catch((err) => {
        console.log(err);
        setShow(err);
        setError(false);
      });
  }, []);

  return (
    <div>
      <h1>Data Fetched from API</h1>
      {error ? (
        <pre>{JSON.stringify(fetchData, null, 2)}</pre>
      ) : (
        <p>An error occurred:</p>
      )}
    </div>
  );
};

export default App;
