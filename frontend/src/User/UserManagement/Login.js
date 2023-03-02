import { useState } from "react";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    props.loginState(true);
  };

  return (
    <form onSubmit={login}>
      <label for="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email address"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        required
      />
      <label for="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Enter your password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
