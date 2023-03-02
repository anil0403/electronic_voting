const RegisterCategory = () =>{
    return (
        <form>
        <label for="text">Category:</label>
        <input
          type="text"
          id="category"
          name="category"
          placeholder="Enter category"
          required
        />
        <button type="submit">Add Category</button>
      </form>
    )
}
export default RegisterCategory;