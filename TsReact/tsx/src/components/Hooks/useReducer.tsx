import React, { useReducer, useContext } from "react";
import { GlobalContext } from "../GlobalState";

const ReducerComponent = () => {
  const { val, on, off } = useContext(GlobalContext);

  return (
    <div>
      <h1>Reducer</h1>
      {val && <h1> STATUS:visible</h1>}
      <button onClick={on}>Show</button>
      <button onClick={off}> Hide </button>
    </div>
  );
};

export default ReducerComponent;
