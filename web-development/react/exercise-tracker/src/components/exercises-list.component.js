/*       Exercises list.       */

// Setup.
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Exercise(props) {
  const { username, description, duration, date } = props.exercise;

  return (
    <tr>
      <td>{username}</td>
      <td>{description}</td>
      <td>{duration}</td>
      <td>{date.substring(0, 10)}</td>
      <td>
        <Link className="btn btn-primary" to={`/edit/${props.exercise._id}`}>
          Edit
        </Link>
        <span> </span>
        <button
          className="btn btn-danger"
          onClick={() => {
            props.onDelete(props.exercise._id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

function ExercisesList() {
  // Hooks.
  const [exercises, setExercises] = useState([]);

  // componentDidMount.
  useEffect(() => {
    axios
      .get("http://localhost:5000/exercises/")
      .then((res) => setExercises(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/exercises/${id}`)
      .then((res) =>
        setExercises(exercises.filter((exercise) => exercise._id !== id))
      )
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h3>Logged Exercises</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {exercises.map((exercise) => {
            return (
              <Exercise
                key={exercise._id}
                exercise={exercise}
                onDelete={handleDelete}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ExercisesList;
