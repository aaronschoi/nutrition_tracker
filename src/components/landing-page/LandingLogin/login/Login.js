import { useState } from "react";
import { getLog, login } from "../../../../api/backend/api";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Error from "../../../error/Error";

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(user)
    login(user)
      .then((data) => {
        dispatch({ type: "retrieve-user", payload: data });
        return getLog(data.user_id);
      })
      .then((data) =>
        console.log(data)
        //dispatch({ type: "retrieve-foodlog", payload: data })
      )
      .then(() => dispatch({ type: "authenticated" }))
      .then(() => history.push('/dashboard'))
      .catch(() => dispatch({type: "load-error", payload: "Unable to find the username and password pair in the database. Please check these fields."}));
  };

  const changeHandler = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
    <Error />
    <form className="login" onSubmit={submitHandler}>
      <div className="login-inputs">
        <input
          className="general-input"
          name="username"
          type="text"
          value={user.username}
          onChange={changeHandler}
          placeholder="Enter your Username"
        />
        <input
          className="general-input"
          name="password"
          type="password"
          value={user.password}
          onChange={changeHandler}
          placeholder="Enter your Password"
        />
      </div>
    <div className="login-button-container">
      <button className="login-button" type="submit">login</button>
    </div>
    </form>
    </>
  );
}
