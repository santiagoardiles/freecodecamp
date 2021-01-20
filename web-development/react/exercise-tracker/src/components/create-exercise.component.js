/*       Create exercise.       */

// Setup.
import React, { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";

// Styles.
import "react-datepicker/dist/react-datepicker.css";

function CreateExercise() {
  // Hooks.
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);

  // componentDidMount.
  useEffect(() => {
    axios.get("http://localhost:5000/users/").then((res) => {
      if (res.data.length > 0) {
        setUsers(res.data.map((user) => user.username));
      }
    });
  }, []);

  // Handlers.
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleDuration = (e) => {
    setDuration(e.target.value);
  };

  const handleDate = (date) => {
    setDate(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const exercise = {
      username,
      description,
      duration,
      date,
    };

    axios
      .post("http://localhost:5000/exercises/add", exercise)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    window.location = "/";
  };

  return (
    <div>
      <h3>Create New Exercise Log</h3>
      <form onSubmit={handleSubmit}>
        {/* Username's dropdown menu. */}
        <div className="form-group">
          <label>Username: </label>
          <select
            required
            className="form-control"
            value={username}
            onChange={handleUsername}
          >
            {users.map((user) => {
              return (
                <option key={user} value={user}>
                  {user}
                </option>
              );
            })}
          </select>
        </div>

        {/* Description field. */}
        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            required
            className="form-control"
            value={description}
            onChange={handleDescription}
          />
        </div>

        {/* Duration field. */}
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input
            type="text"
            className="form-control"
            value={duration}
            onChange={handleDuration}
          />
        </div>

        {/* Date field. */}
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker selected={date} onChange={handleDate} />
          </div>
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

export default CreateExercise;
