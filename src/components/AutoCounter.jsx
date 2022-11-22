import React, { useEffect, useState } from "react";
import "./AutoCounter.css"


const AutoCounter = () => {
  const [autoCounter, setAutoCounter] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setAutoCounter((prevCounter) => {
        if (prevCounter >= 60){
          return prevCounter;
        }
        return prevCounter + 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="autoCounter">
      <h1>Let's Count</h1>
      {autoCounter}
      </div>
  )

}

export default AutoCounter;