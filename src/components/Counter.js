import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  //   function handleClick(action) {
  //     if (action === "increment") setCount((prev) => prev + 1);
  //     if (action === "decrement") setCount((prev) => prev - 1);
  //   }

  function handleClick(e) {
    if (e.target.textContent === "+") setCount(count + 1);
    if (e.target.textContent === "-") setCount(count - 1);
  }

  return (
    <div className="container">
      <h1 className="number">{count}</h1>
      <section className="btns-container">
        <button onClick={handleClick} className="btn">
          -
        </button>
        <button onClick={handleClick} className="btn">
          +
        </button>
      </section>
    </div>
  );
}
