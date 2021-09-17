import React, { useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Landing from "./components/landing-page/Landing";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const isLoggedIn = useSelector((states) => states.isLoggedIn);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const elapsedTime =
      new Date().getTime() -
      new Date(localStorage.getItem("timestamp")).getTime();
    if (elapsedTime > 30000) {
      localStorage.clear();
    } else {
      dispatch({ type: "authenticated" });
      if (localStorage.getItem("first")) {
        dispatch({
          type: "retrieve-user",
          payload: {
            user_id: localStorage.getItem("user_id"),
            username: localStorage.getItem("username"),
            password: localStorage.getItem("password"),
            first: localStorage.getItem("first"),
            last: localStorage.getItem("last"),
            dob: localStorage.getItem("dob"),
            sex: localStorage.getItem("sex"),
            usda: localStorage.getItem("usda"),
            avatar: localStorage.getItem("avatar"),
            admin: localStorage.getItem("admin"),
          },
        });
        history.push('/dashboard')
      }
    }

    if (isLoggedIn) {
      setTimeout(() => {
        localStorage.clear();
      }, 30000);
    }
  }, [isLoggedIn]);

  return (
    <div className="App">
      <Switch>
        <Route path="/">{isLoggedIn ? <Layout /> : <Landing />}</Route>
      </Switch>
    </div>
  );
}
