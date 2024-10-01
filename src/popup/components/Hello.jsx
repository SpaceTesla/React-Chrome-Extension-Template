import React from "react";
import { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);

  let increment = () => {
    setCount((count) => count + 1);
    console.log(count);
  };

  let styles = {
    fontSize: "2em",
    color: "white",
    backgroundColor: "#333",
    borderRadius: "1rem",
    cursor: "pointer",
    userSelect: "none",
    width: "90%",
    margin: "1rem 0",
    textAlign: "center",
  };

  return (
    <>
      <div className="hello">Hello from Popup</div>
      <div className={"counter"} style={styles} onClick={increment}>
        {count}
      </div>
    </>
  );
}
