const RegisterParty = () => {
  return (
    <form>
      <label for="text">Party:</label>
      <input
        type="text"
        id="party"
        name="party"
        placeholder="Enter name of party"
        required
      />
      <button type="submit">Add Party</button>
    </form>
  );
};

export default RegisterParty;
