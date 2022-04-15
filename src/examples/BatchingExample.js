import { useEffect, useState } from "react";
import { flushSync } from "react-dom";

function BatchingExample() {
  const [value, setValue] = useState(0);
  const [state, setState] = useState(0);

  console.log("RENDER");

  const handleAdd = () => {
    Promise.resolve().then(() => {
      flushSync(() => {
        setValue((prev) => prev + 1);
      });
      flushSync(() => {
        setState((prev) => prev + 1);
      });
    });
  };

  return (
    <div>
      <div>value = {value}</div>
      <div>state = {state}</div>
      <button onClick={handleAdd}>ADD</button>
    </div>
  );
}

export default BatchingExample;
