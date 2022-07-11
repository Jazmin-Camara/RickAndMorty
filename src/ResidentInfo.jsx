import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ResidentInfo = ({ character }) => {
  const [characters, setCharacters] = useState({});

  useEffect(() => {
    axios.get(character).then((res) => setCharacters(res.data));
  }, []);
  console.log(characters);

  const getMultiply = () => {
    if (characters.status == "Alive") {
      return (
        <>
          <img className="alive" src={characters.image} alt="" />
        </>
      );
    } else if (characters.status == "Dead") {
      return (
        <>
          <img className="dead" src={characters.image} alt="" />
        </>
      );
    } else {
      return (
        <>
          <img className="unknow" src={characters.image} alt="" />
        </>
      );
    }
  };

  return (
    <div className="characters">
      <h1>{characters?.name}</h1>
      

      {getMultiply()}
      <q>Status: {characters.status}</q>

      <p>Origin: {characters.origin?.name}</p>
      <p>
        Episodes where appears: <span>{characters.episode?.length}</span>
      </p>
    </div>
  );
};

export default ResidentInfo;