import { useState } from "react";

import "./App.css";

function App() {
  let [counter,setCounter]=useState(0);

  const addNum = () => {
    setCounter(counter+1);
  };
  return (
    <>
      <h1> Chai aur code </h1>
      <h3>Counter value : {counter}</h3>
      <button onClick={addNum}> Add value = {counter}</button>
      <br />
      <button>Remove value = {counter} </button>
    </>
  );
}

export default App;
