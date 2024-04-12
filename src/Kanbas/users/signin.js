// /users/signin.js

import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './signin.css';


function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  let response;

  const signin = async () => {
    try {
      response = await client.signin(credentials);
      console.log("response", response)
      if(response != null) {
        navigate("/account");
      }
      else {
        setError('Authentication failed. Please check your credentials.');
      }
     
    } catch (err) {
      console.log(err);
      setError('Authentication failed. Please check your credentials.');
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <input 
        type="text"
        value={credentials.username} 
        onChange={(e) => setCredentials({...credentials, username: e.target.value})}
      />
      <input 
        type="password"
        value={credentials.password} 
        onChange={(e) => setCredentials({...credentials, password: e.target.value})}
      />
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button onClick={signin}>Sign In</button>
    </div>
  );
}
export default Signin;
