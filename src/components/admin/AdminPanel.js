import {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminGet } from "../../api/backend/api";
import { v4 as uid } from "uuid";
import User from "./users/User";
import Loading from "../loaders/Loading";

export default function AdminPanel() {
  const { user, users, panel } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.admin) {
      adminGet(user).then(({data}) => dispatch({type: "load-users", payload: data}));
    }
  }, []);

  
  if(panel) {
  return (
    <div className="admin-container">
      <h2 className="admin-header">Admin Panel</h2>
      <h3 className="admin-usercount">Number of Users (not including yourself): {users.length - 1}</h3>
      <ul className="user-list-container">
      {users.length > 0 ? (
        users.map((user) => {
          return <User key={uid()} user={user} />;
        })
      ) : (
        <div>No Users</div>
      )}
      </ul>
    </div>
  );}

  return <Loading message={"Removing User..."} />
}
