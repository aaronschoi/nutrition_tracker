import { useState } from "react";
import { login } from "../../../../api/backend/api";

export default function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const submitHandler = (event) => {
    event.preventDefault();
    login(user).then(console.log)
  };

  const changeHandler = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <input
          name="username"
          type="text"
          value={user.username}
          onChange={changeHandler}
          placeholder="Enter your Username"
        />
        <input
          name="password"
          type="password"
          value={user.password}
          onChange={changeHandler}
          placeholder="Enter your Password"
        />
      </div>
      <button type="submit">login</button>
    </form>
  );
}
