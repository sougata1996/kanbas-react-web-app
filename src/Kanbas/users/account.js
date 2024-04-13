import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./account.css";
import { Button } from "react-bootstrap";
function Account() {
  const { id } = useParams();

  const [account, setAccount] = useState(null);
  const navigate = useNavigate();
  const fetchAccount = async () => {
    const account = await client.account();
    console.log("First One", account);
    setAccount(account);
  };

  const signout = async () => {
    await client.signout();
    navigate("/signin");
  };

  const save = async () => {
    await client.updateUser(account);
    navigate(-1);
  };

  const goToUserTable = () => {
    navigate("/user-table"); // Navigate to the User Table screen on button click
  };

  const findUserById = async (id) => {
    const user = await client.findUserById(id);
    console.log("Second One", user);
    setAccount(user);
  };

  useEffect(() => {
    if (id) {
      findUserById(id);
    } else {
      fetchAccount();
    }
  }, [id]);
  console.log("Reached here");
  return (
    <div className="w-50">
      <h1>Account</h1>
      {account && (
        <div>
          <input
            placeholder="password"
            type="password"
            value={account.password}
            onChange={(e) =>
              setAccount({ ...account, password: e.target.value })
            }
          />
          <input
            placeholder="first name"
            value={account.firstName}
            onChange={(e) =>
              setAccount({ ...account, firstName: e.target.value })
            }
          />
          <input
            placeholder="last name"
            value={account.lastName}
            onChange={(e) =>
              setAccount({ ...account, lastName: e.target.value })
            }
          />
          <input
            placeholder="Date of birth"
            value={account.dob}
            onChange={(e) => setAccount({ ...account, dob: e.target.value })}
          />
          <input
            placeholder="email"
            value={account.email}
            onChange={(e) => setAccount({ ...account, email: e.target.value })}
          />
          <select
            placeholder="role"
            onChange={(e) => setAccount({ ...account, role: e.target.value })}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
        </div>
      )}

      <div className="d-flex flex-column align-items-start mt-3">
        <Button onClick={save}>Save</Button>

        <Button className="btn btn-danger" onClick={signout}>
          Sign Out
        </Button>

        <Button className="yellow" onClick={goToUserTable}>
          User Table
        </Button>
      </div>
    </div>
  );
}
export default Account;
