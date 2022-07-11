import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Resident from "./ResidentInfo";

const Location = () => {
  const [location, setLocation] = useState({});
  const [search, setSearch] = useState("");

  useEffect(() => {
    const random = Math.floor(Math.random() * 120) + 1;
    axios
      .get(`https://rickandmortyapi.com/api/location/${random}/`)
      .then((res) => setLocation(res.data));
  }, []);

  const searchType = () => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${search}/`)
      .then((res) => setLocation(res.data));
  };

  // location.residents

  return (
    <div >
      <div className="input-container">
        <input
          className="input"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="button-container">
        <button onClick={searchType}>Search</button>
      </div>
      <div className="container">
        <br />
        <ul className="ul-main">
          <li>
            Name: <br /> {location.name}
          </li>
          <li>
            Type: <br /> {location.type}
          </li>
          <li>
            Dimension: <br /> {location.dimension}
          </li>
          <li>
            Population: <br /> {location.residents?.length}
          </li>
        </ul>
        <div className="cards">
          {location.residents?.map((character) => (
            <Resident character={character} key={character} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Location;