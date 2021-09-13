import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminGet } from "../../api/backend/api";
import { v4 as uid } from "uuid";
import User from "./users/User";

export default function AdminPanel() {
  const { user, users } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.admin) {
      adminGet(user).then(({data}) => dispatch({type: "load-users", payload: data}));
    }
  }, []);

  return (
    <ul>
      {users.length > 0 ? (
        users.map((user) => {
          return <User key={uid()} user={user} />;
        })
      ) : (
        <li>No Users</li>
      )}
    </ul>
  );
}
