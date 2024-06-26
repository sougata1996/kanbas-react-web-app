import React, { useState } from "react";
function Counter() {
    const [count, setCount] = useState(7);
  console.log(count);
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button className="btn btn-green" style={{borderRadius: '10px', marginRight: '10px'}}
        onClick={() => { setCount(count + 1)}}>
        Up
      </button>
      <button className="btn btn-danger" style={{borderRadius: '10px'}}
        onClick={() => { setCount(count - 1)}}>
        Down
      </button>
    </div>
  );
}
export default Counter;