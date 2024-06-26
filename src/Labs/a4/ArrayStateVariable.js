import React, { useState } from "react";
import './index.css';
function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };
  const deleteElement = (index) => {
    setArray(array.filter((item, i) => i !== index));
  };
  return (
    <div>
      <h2>Array State Variable</h2>
      <button className="btn btn-green"
      style={{borderRadius: '10px', marginBottom: '20px'}}
       onClick={addElement}>Add Element</button>
      <ul>
        {array.map((item, index) => (
          <li key={index}>
            {item}
            <button className="btn btn-danger" 
            style={{marginLeft: '10px', padding: '5px', borderRadius:'5px'}}
            onClick={() => deleteElement(index)}>
              Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ArrayStateVariable;