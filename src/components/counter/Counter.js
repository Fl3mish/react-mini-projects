import React, { useState } from "react";
import "./styles.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1 className="number">{count}</h1>
      <section className="btns-container">
        <button onClick={handleDecrement} className="btn">
          -
        </button>
        <button onClick={handleIncrement} className="btn">
          +
        </button>
      </section>
    </div>
  );
}
