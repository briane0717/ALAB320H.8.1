// src/App.jsx
import React, { useState, useEffect } from "react";
import { getAllStarships } from "./services/sw-api";
import StarShipCard from "./components/StarShipCard";

function App() {
  const [starships, setStarships] = useState([]);
  const [error, setError] = useState(null);

  let url = "https://swapi.py4e.com/api/starships/";

  const getStarships = async (url) => {
    console.log(url);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);

      setStarships(data.results);
      console.log(setStarships);
    } catch (err) {
      console.error(err);
      setError("There's noting here");
    }
  };

  useEffect(() => {
    getStarships(url);
  }, []);

  return (
    <>
      <h1 className="title">Star Wars Starships</h1>

      <div className="card-container">
        {starships.length === 0 ? (
          <p>Loading starships...</p>
        ) : (
          starships.map((ship, index) => (
            <StarShipCard key={index} name={ship.name} />
          ))
        )}
      </div>
    </>
  );
}

export default App;
