import React, { useState } from "react";
import Canvas from "./Canvas";
import ControlPanel from "./ControlPanel";
import "./App.css";

function App() {
  const [algorithm, setAlgorithm] = useState("dda"); // Текущий алгоритм
  const [parameters, setParameters] = useState({
    x1: 0,
    y1: 0,
    x2: 100,
    y2: 100,
    radius: 50,
  });

  return (
    <div className="App">
      <h1> Algorithms of Rasterization </h1>
      <ControlPanel setAlgorithm={setAlgorithm} setParameters={setParameters} />
      <Canvas algorithm={algorithm} parameters={parameters} />
    </div>
  );
}

export default App;
