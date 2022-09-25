import React, { useState } from "react";

const Card = () => {
  const [background, setBackground] = useState("#eee");
  const [font, setFont] = useState("blue");

  const defaultColor = {
    backgroundColor: background,
    color: font,
  };

  function handleColor() {
    setBackground("aqua");
    setFont("red");
  }

  return (
    <div onClick={handleColor} style={defaultColor}>
      <h2>Set me different color</h2>
    </div>
  );
};

export default Card;
