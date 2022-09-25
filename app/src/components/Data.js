import React from "react";
// ==============================================> We can rename props
export default function Data({ title, description, button: buttonText }) {
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <button>{buttonText}</button>
    </>
  );
}
