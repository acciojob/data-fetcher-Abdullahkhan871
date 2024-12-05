import React, { useEffect, useState } from "react";
import "./../styles/App.css";
import axios from "axios";

const App = () => {
  const [fetchData, setFetchData] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((response) => setFetchData(response));
  }, []);

  return (
    <div>
      <h1>Data Fetched from API</h1>
      <pre>{JSON.stringify(fetchData, null, 2)}</pre>
    </div>
  );
};

export default App;
