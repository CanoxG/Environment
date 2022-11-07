import React, { useState } from "react";

const Card = () => {
  const [background, setBackground] = useState("#eee");
  const [font, setFont] = useState("blue");

  const defaultColor = {
    backgroundColor: background,
    color: font,
  };

  function handleColor() {
    if (background === "#eee") {
      setBackground("aqua");
      setFont("red");
    } else {
      setBackground('#eee');
      setFont('blue')
    }
  }

  return (
    <div onClick={handleColor} style={defaultColor}>
      Card State
      <h2>Set me different color</h2>
    </div>
  );
};

export default Card;
