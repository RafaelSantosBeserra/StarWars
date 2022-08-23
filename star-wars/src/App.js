import React from "react";
import './APP.css';
import CharacterOptions from "./componentes/CharacterOptions/CharacterOptions";
import PlanetsOptions from "./componentes/PlanetsOptions/PlanetsOptions";

function App() {
  return (
    <div className="App">
      <h1> O que deseja pesuisar?</h1>
      <div className="listas">
        <div>{CharacterOptions()}</div>
        <div>{PlanetsOptions()}</div>
      </div>      
    </div>
  );
};

export default App;
