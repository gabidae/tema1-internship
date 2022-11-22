import React, { useState } from "react";
import "./ManualCounter.css";

const ManualCounter = () => {
  const [manualCounter, setManualCounter] = useState(0);

  const handlePlus = () => {
    if (manualCounter < 10) {
      setManualCounter(manualCounter + 1);
    }
  };

  const handleMinus = () => {
    if (manualCounter > 0) {
      setManualCounter(manualCounter - 1);
    }
  };

  const popUp = ["It seems that you can't count more then 10!"];

  const alertPopUP = () => {
    if (manualCounter === 10) {
      return popUp;
    }
  };

  return (
    <div>
      <div className="buttonContainer">
        <button onClick={handleMinus}>-</button>
        <div>{manualCounter}</div>
        <button onClick={handlePlus}>+</button>
      </div>
      <div className="popUp">{alertPopUP(popUp)}</div>
    </div>
  );
};

export default ManualCounter;
