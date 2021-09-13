import { useState } from "react";
import { register } from "../../../api/backend/api";
import { useHistory } from "react-router-dom";

export default function Registration() {

  const history = useHistory()

  const [user, setUser] = useState({
    first: "",
    last: "",
    dob: "",
    sex: "",
    username: "",
    password: "",
    usda: "",
  });

  const [creating ,setCreating] = useState(false)

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
      register(user).then(() => setCreating(true)).then(() => setTimeout(() => {
        history.push("/")
      },5000));
    }
  };

  const form = (<form onSubmit={submitHandler}>
  <input
    name="first"
    type="text"
    value={user.first}
    onChange={changeHandler}
    placeholder="Enter your first name"
  />
  <input
    name="last"
    type="text"
    value={user.last}
    onChange={changeHandler}
    placeholder="Enter your last name"
  />
  {/* year-month-date */}
  <input
    name="dob"
    type="date"
    value={user.dob}
    onChange={changeHandler}
    placeholder="Enter your date of birth"
  />
  <input
    name="sex"
    type="text"
    value={user.sex}
    onChange={changeHandler}
    placeholder="select your biological sex"
  />
  <input
    name="username"
    type="text"
    value={user.username}
    onChange={changeHandler}
    placeholder="Enter a username"
  />
  <input
    name="password"
    type="text"
    value={user.password}
    onChange={changeHandler}
    placeholder="Enter a password"
  />
  <input
    name="usda"
    type="text"
    value={user.usda}
    onChange={changeHandler}
    placeholder="Enter your USDA API KEY here"
  />
  <button type="submit">Submit</button>
</form>)

  return (
    <>
    {creating ? <h2>Creating User in Database...</h2> : form}
    </>
  );
}
