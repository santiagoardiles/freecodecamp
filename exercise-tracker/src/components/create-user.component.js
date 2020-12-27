/*       Create user.       */

// Setup.
import React, { useState } from "react";
import axios from "axios";

function CreateUser() {
  // Hooks.
  const [username, setUsername] = useState("");

  // Handlers.
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      username,
    };

    console.log(user);

    axios
      .post("http://localhost:5000/users/add", user)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    setUsername("");
  };

  return (
    <div>
      <h3>Create New User</h3>
      <form onSubmit={handleSubmit}>
        {/* Username field. */}
        <div className="form-group">
          <label>Username: </label>
          <input
            type="text"
            required
            className="form-control"
            value={username}
            onChange={handleUsername}
          />
        </div>

        {/* Submit button. */}
        <div className="form-group">
          <input
            type="submit"
            value="Create Exercise Log"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}

export default CreateUser;
