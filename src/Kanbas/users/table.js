import React, { useState, useEffect } from "react";
import './table.css';
import { BsTrash3Fill, BsFillCheckCircleFill, BsPencil, BsPlusCircleFill }
  from "react-icons/bs";
import * as client from "./client";
import { Link } from "react-router-dom";
function UserTable() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ username: "", password: "", role: "USER" });
  const [error, setError] = useState('');


  const createUser = async () => {
    try {
      const newUser = await client.createUser(user);
      setUsers([newUser, ...users]);
    } catch (err) {
      setError('Error adding user');
    }
  };

  const deleteUser = async (user) => {
    console.log("User", user);
    try {
      
      await client.deleteUser(user);
      setUsers(users.filter((u) => u._id !== user._id));
    } catch (err) {
      setError('Error deleting user');
    }

  }

  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };

  const selectUser = async (user) => {
    try {
      const u = await client.findUserById(user._id);
      setUser(u);
    } catch (err) {
      console.log(err);
    }
  };

  const updateUser = async () => {
    try {
      await client.updateUser(user);
      setUsers(users.map((u) => (u._id === user._id ? user : u)));
    } catch (err) {
      console.log(err);
    }
  };


  useEffect(() => { fetchUsers(); }, []);
  return (
    <div>
      <h1>User List</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>

          <tr>
            <td>
            {error && <div style={{ color: 'red' }}>{error}</div>}
              <input placeholder="username" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })}/>
              <input type="password" placeholder="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })}/>
            </td>
            <td>
              <input placeholder="firstName" value={user.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })}/>
            </td>
            <td>
              <input placeholder="lastName" value={user.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value })}/>
            </td>
            <td>
              <select placeholder="role" value={user.role} onChange={(e) => setUser({ ...user, role: e.target.value })}>
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
              </select>
            </td>
            <td className="text-nowrap">
    <BsFillCheckCircleFill onClick={updateUser}
      className="me-2 text-success fs-1 text" />
    <BsPlusCircleFill onClick={createUser}
      className="text-success fs-1 text" />
  </td>

          </tr>

        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <Link to={`/account/${user._id}`}>
              <td>{user.username}</td>
              </Link>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td className="text-nowrap">
    <button className="btn btn-danger me-2">
      <BsTrash3Fill onClick={() => deleteUser(user)} />
    </button>
    <button className="btn btn-warning me-2">
      <BsPencil onClick={() => selectUser(user)} />
    </button>
  </td>

            </tr>))}
        </tbody>
      </table>
    </div>
  );
}
export default UserTable;