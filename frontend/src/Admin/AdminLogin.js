const AdminLogin = (props) => {
  const login = (e) => {
    e.preventDefault();
    props.loginState(true);
  };
  return (
    <div class="container">
      <div class="form-container">
        <div id="login-form" class="form-content active">
          <h2>Admin Login</h2>
          <form>
            <label for="text">Username</label>
            <input type="text" id="text" name="email" required />
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required />
            <button onClickCapture={login} type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
