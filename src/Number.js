import React, { useState, useEffect } from "react";

function Number({ number, increamentNumber }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    console.log("number component useeffect called");
    setList([number, number + 1, number + 2]);
  }, [number, increamentNumber]);

  return (
    <>
      {list.map((num, index) => (
        <h1 key={index}>{num}</h1>
      ))}
      <button onClick={increamentNumber}>Increament Number</button>
    </>
  );
}

export default Number;
