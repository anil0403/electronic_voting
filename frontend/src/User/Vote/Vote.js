import { useState } from "react";

const Vote = (props) => {
  const [voterId, setVoterId] = useState("");
  const [alert, setAlert] = useState("");

  //logout function
  const logout = (e) => {
    e.preventDefault();
    setVoterId("");
    props.loginState(false);
  };

  // vote handler function
  const voteHandler = (e) =>{
    e.preventDefault();
    // props.loginState(true);
    setVoterId("");

  }

  return (
    <div class="vote-container">
      <div class="voter-info-container">
        <span class="head">Voter Information</span>
        <span class="name">Name = Sandesh Bhusal</span>
        <span class="address">Address = Butwal</span>
        <span class="email">Email = bhusalsandesh0@gmail.com</span>
        <span class="voter-id">Voter Id = xxxxxx</span>
      </div>

      <button onClickCapture={logout} type="submit">
        Logout
      </button>

      <div class="vote-form-container">
        <h2>Please Choose the Candidates and Enter Voter Id </h2>
        <form onSubmit={voteHandler}>
          <div class="form-item-container">
            <div class="form-item">
              <label for="category">President:</label>
              <select name="category" id="category">
                <option value="null" hidden selected>
                  Choose your candidate
                </option>
                <option value="President">Anil Shrestha</option>
                <option value="President">Anil Shrestha</option>
                <option value="Mayor">Anil Shrestha</option>
              </select>
            </div>
            <div class="form-item">
              <label for="category">Vice-President:</label>
              <select name="category" id="category">
                <option value="null" hidden selected>
                  Choose your candidate
                </option>
                <option value="President">Yubraj Bashyal</option>
                <option value="President">Yubraj Bashyal</option>
                <option value="Yubraj Bashyal">Yubraj Bashyal</option>
              </select>
            </div>
          </div>

          <label for="voter-id">Voter Id:</label>
          <input
            type="number"
            id="voter-id"
            name="voter-id"
            placeholder="Enter your voter id"
            onChange={(e) => setVoterId(e.target.value)}
            value={voterId}
            required
          />
          <button type="submit">Cast your vote</button>
        </form>
        <div class="alert">You Have Successfully Voted</div>
      </div>
    </div>
  );
};

export default Vote;
