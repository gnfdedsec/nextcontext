import React, { useState } from 'react';

export default function Hook() {
  const [themecolor, setCount] = useState("light");

  const increment = () => {
    setCount("dark");
  };

  function decrement() {
    setCount("light");
  }

  return (
    <div>
      <h1>themecolor: {themecolor}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
