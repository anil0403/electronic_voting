const RegisterAdmin = () => {
  return (
    <div className="form-container">
      <form>
        <label for="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter username"
          required
        />

        <label for="text">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter password"
          required
        />
        <button type="submit">Add Admin</button>
      </form>
    </div>
  );
};
export default RegisterAdmin;
