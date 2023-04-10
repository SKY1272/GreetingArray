import React, { useState } from "react";
import styled from "./Greeting.module.css";
function GreetingArray() {
  const [greeting, setGreeting] = useState(1);
  const greet = ["Hello", "Namaste", "Good Morning"];
  function changeGreeting() {
    setGreeting((x) => (x + 1) % greet.length);
  }
  return (
    <div className={styled.container}>
      <h1>{greet[greeting]}</h1>
      <button onClick={changeGreeting}>Change Greeting</button>
    </div>
  );
}
export default GreetingArray;
