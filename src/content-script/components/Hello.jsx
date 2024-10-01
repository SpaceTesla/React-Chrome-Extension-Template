import React from "react";

export default function Hello() {
  let styles = {
    position: "fixed",
    top: "10px",
    right: "10px",
    padding: "10px",
    backgroundColor: "lightblue",
    border: "2px solid black",
    zIndex: "1000",
  };

  return (
    <div className="hello" style={styles}>
      Hello from the Content Script!
    </div>
  );
}
