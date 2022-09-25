// Lifting sate up ====> Update Parent Component State
import React from "react";

function MyComponent({ state, setState }) {
  function handleClick(e) {
    e.preventDefault();
    setState(!state);
  }

  return (
    <div onClick={handleClick}>
      {state ? (
        <h4>{process.env.REACT_APP_API_URL}</h4>
      ) : (
        <p>Hello My Component</p>
      )}
    </div>
  );
}

export default MyComponent;
