import React from "react";
// ======> We can rename data props
export default function Data({ title, description, button: buttonText }) {
  return (
    <>
      <h1>{title}</h1>
      <hr/>
      <p>{description}</p>
      <button>{buttonText}</button>
    </>
  );
}
