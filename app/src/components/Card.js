import React, { useState } from "react";

const Card = () => {
  const [font, setFont] = useState("blue");

  const defaultColor = {
    color: font,
  };

  function handleColor() {
    if (font === "blue") {
      setFont("red");
    } else {
      setFont("blue");
    }
  }

  return (
    <div className="letterButton" onClick={handleColor} style={defaultColor}>
      <h1>Card State</h1>
      <p>Set me different color</p>
    </div>
  );
};

export default Card;
