import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
function Signup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "", password: "" });
  const navigate = useNavigate();
  
  const signup = async () => {
    try {
      await client.signup(credentials);
      navigate("/account");
    } catch (err) {
      setError(err);
    }
  };
  return (
    <div>
      <h1>Sign Up</h1>
      {error && <div>{error}</div>}
      <input placeholder="username"
        value={credentials.username}
        onChange={(e) => setCredentials({
          ...credentials,
          username: e.target.value })} />
      <input type="password" placeholder="password"
        value={credentials.password}
        onChange={(e) => setCredentials({
          ...credentials,
          password: e.target.value })} />
      <button onClick={signup}>
        Sign Up
      </button>
    </div>
  );
}
export default Signup;