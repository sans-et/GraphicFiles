import React from "react";

const ControlPanel = ({ setAlgorithm, setParameters }) => {
  const handleAlgorithmChange = (e) => {
    setAlgorithm(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setParameters((prev) => ({ ...prev, [name]: Number(value) }));
  };

  return (
    <div className="control-panel">
      <h2>Control Panel</h2>
      <div>
        <label>Algorithm:</label>
        <select onChange={handleAlgorithmChange}>
          <option value="step">Step-by-Step</option>
          <option value="dda">DDA</option>
          <option value="bresenham-line">Bresenham (Line)</option>
          <option value="bresenham-circle">Bresenham (Circle)</option>
        </select>
      </div>
      <div>
        <label>X1:</label>
        <input type="number" name="x1" onChange={handleInputChange} />
        <label>Y1:</label>
        <input type="number" name="y1" onChange={handleInputChange} />
      </div>
      <div>
        <label>X2:</label>
        <input type="number" name="x2" onChange={handleInputChange} />
        <label>Y2:</label>
        <input type="number" name="y2" onChange={handleInputChange} />
      </div>
      <div>
        <label>Radius (for Circle):</label>
        <input type="number" name="radius" onChange={handleInputChange} />
      </div>
    </div>
  );
};

export default ControlPanel;
