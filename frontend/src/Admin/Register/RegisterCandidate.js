import { useState } from "react";


const RegisterCandidate = () =>{
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [citizenshipId, setCitizenshipId] = useState("");
    const [dob, setDob] = useState("");
    const [category, setCategory] = useState("");
    const [alert, setAlert] = useState("");
    return (
        <form>
        <label for="full-name">Full Name:</label>
        <input
          type="text"
          id="full-name"
          name="full-name"
          placeholder="Enter your full name"
          required
        />
        <label for="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          placeholder="Enter your address"
          required
        />
        <label for="citizenshipId">Citizenship ID:</label>
        <input
          type="number"
          id="citizenshipId"
          name="citizenshipId"
          placeholder="Enter your citizenship ID"
          required
        />
        <label for="dob">Date of birth</label>
        <input
          type="date"
          id="dob"
          name="dob"
          placeholder="Enter your Date of birth"
          required
        />
        <label for="category">Category:</label>
        <select name="category" id="category">
          <option value="null" hidden selected>
            Choose Category
          </option>
          <option value="President">President</option>
          <option value="President">Vice-President</option>
          <option value="Mayor">Mayor</option>
        </select>

        <label for="party">Party:</label>
        <select name="party" id="party">
          <option value="null" hidden selected>
            Choose Pary
          </option>
          <option value="cpm-uml">CPN UML</option>
          <option value="cpn-uml">CPN UML</option>
        </select>
        <button type="submit">Add Candidate</button>
      </form>
    )
}
export default RegisterCandidate;