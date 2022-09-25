import React, { useState } from "react";
import "./App.css";
import MyComponent from "./components/MyComponent";
import Card from "./components/Card";
import Data from "./components/Data";

function App() {
  const [state, setState] = useState({ clicked: true });
  const [count, setCount] = useState(0);

  // We Passed data to Children
  const data = {
    title: "Optimus Prime",
    description: "World Wide Web",
    button: "More Options",
  };

  return (
    <div className="App">
      <h2>{process.env.NODE_ENV}</h2>
      {count ? <div>{count}</div> : " "}

      {process.env.NODE_ENV === "development" && (
        <main className="App-header">
          <MyComponent setState={setState} state={state} />
          <br />
        </main>
      )}
      <Card />
      {/* Props can be Spread Individually */}
      <Data {...data} />
    </div>
  );
}

export default App;
