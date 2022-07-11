import { useState } from "react";
import "./App.css";
import Location from "./Location";


function App() {
 

  return (
    <div className="App">

      <div className="div-nav">
        <img
          className="img-logo"
          src="https://logos-marcas.com/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png"
          alt=""
        />
      </div>

    <Location />
  </div>
);
}


export default App
