import { useState } from "react";
import { adminLogin } from "../Api/ApiHandler";

const AdminLogin = (props) => {
  // defining states
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    adminLogin(username, password).then((response) => {
      // console.log(response.token);
      setToken(response.token);
    });
    if (token) {
      props.loginState(true);
    }
  };
  return (
    <div class="container">
      <div class="form-container">
        <div id="login-form" class="form-content active">
          <h2>Admin Login</h2>
          <form onSubmit={login}>
            <label for="text">Username</label>
            <input
              type="text"
              id="text"
              name="email"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              required
            />
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
