import { useState } from "react";
import { register } from "../../../api/backend/api";
import { useHistory } from "react-router-dom";
import Loading from "../../loaders/Loading";

export default function Registration() {
  const history = useHistory();

  const [user, setUser] = useState({
    first: "",
    last: "",
    dob: "",
    sex: "",
    username: "",
    password: "",
    usda: "",
  });

  const [creating, setCreating] = useState(false);

  const changeHandler = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      window.confirm(
        "Press okay if all of the information provided is correct."
      )
    ) {
      register(user)
        .then(() => setCreating(true))
        .then(() =>
          setTimeout(() => {
            history.push("/");
          }, 5000)
        );
    }
  };

  const form = (
    <form className="registration-form" onSubmit={submitHandler}>
      <input
        className="general-input"
        name="first"
        type="text"
        value={user.first}
        onChange={changeHandler}
        placeholder="Enter your first name"
      />
      <input
        className="general-input"
        name="last"
        type="text"
        value={user.last}
        onChange={changeHandler}
        placeholder="Enter your last name"
      />
      {/* year-month-date */}
      <input
        className="general-input"
        name="dob"
        type="date"
        value={user.dob}
        onChange={changeHandler}
        placeholder="Enter your date of birth"
      />
      <div className="radio-container">
        <div className="radio-element">
          <label className="radio-label">
            <input
              name="sex"
              type="radio"
              value="male"
              checked={user.sex === "male"}
              onChange={changeHandler}
              className="radio"
            />
            <span className="checkmark"></span>
          </label>
          <h4 className="radio-element-name">male</h4>
        </div>
        <div className="radio-element">
          <label className="radio-label">
            <input
              name="sex"
              type="radio"
              value="female"
              checked={user.sex === "female"}
              onChange={changeHandler}
              className="radio"
            />
            <span className="checkmark"></span>
          </label>
          <h4 className="radio-element-name">female</h4>
        </div>
      </div>
      <input
        className="general-input"
        name="username"
        type="text"
        value={user.username}
        onChange={changeHandler}
        placeholder="Enter a username"
      />
      <input
        className="general-input"
        name="password"
        type="text"
        value={user.password}
        onChange={changeHandler}
        placeholder="Enter a password"
      />
      <input
        className="general-input"
        name="usda"
        type="text"
        value={user.usda}
        onChange={changeHandler}
        placeholder="Enter your USDA API KEY here"
      />
      <button type="submit">Submit</button>
    </form>
  );

  return (
    <>
      {creating ? (
        <Loading message={"One moment while we add you to the database. . ."} />
      ) : (
        form
      )}
    </>
  );
}
