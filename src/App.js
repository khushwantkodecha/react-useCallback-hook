import React, { useState, useCallback } from "react";
import "./App.css";
import Number from "./Number";

function App() {
  const [greeting, setGreeting] = useState("Hello");
  const [number, setNumber] = useState(0);

  const greetingHandler = () => {
    console.log("Greeting function called");
    if (greeting === "Hello") {
      setGreeting("Bye");
    } else {
      setGreeting("Hello");
    }
  };

  const increamentNumber = useCallback(() => {
    setNumber(number + 1);
  }, [number]);

  return (
    <div className="App">
      <h1>{greeting}</h1>
      <p>
        Clicking on change greeting text button function of chlid
        component(increment number) is also re-created, to prevent from this
        situation we need to wrap incrementNumber function in useCallback hook
      </p>
      <button onClick={greetingHandler}>Change Greeting Text</button>
      <Number number={number} increamentNumber={increamentNumber} />
    </div>
  );
}

export default App;
