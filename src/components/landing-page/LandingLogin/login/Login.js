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
    login(user)
      .then((data) => {
        if (typeof data === "string") {
          dispatch({ type: "load-error", payload: data });
          return null;
        } else {
          dispatch({ type: "retrieve-user", payload: data });
          dispatch({ type: "authenticated" });
          for ( const aspect in data ) {
            localStorage.setItem(`${aspect}`, `${data[aspect]}`)
          }
          localStorage.setItem("timestamp", new Date())
          history.push('/dashboard')
          return null;
        }
      })
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
          <button className="login-button" type="submit">
            login
          </button>
        </div>
      </form>
    </>
  );
}
