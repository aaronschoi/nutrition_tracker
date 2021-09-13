import { useDispatch, useSelector } from "react-redux";
import { adminDELETE, adminGet } from "../../../api/backend/api";

export default function User({
  user: { user_id, username, avatar, first, last, sex },
}) {
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();

  const clickHandler = (event) => {
    if (user.admin) {
      if (
        window.confirm(
          "This is will permanently remove this user. Is this intentional?"
        )
      ) {
        adminDELETE({ user_id, admin: user.admin })
          .then(() => adminGet(user))
          .then(({ data }) => dispatch({ type: "load-users", payload: data }));
      }
    }
  };

  return (
    <div>
      <img src={avatar} alt={`${first} ${last}`} />
      <h4>{`${first} ${last}`}</h4>
      <p>Sex: {sex}</p>
      <p>Username: {username}</p>
      <button type="button" onClick={clickHandler}>
        REMOVE
      </button>
    </div>
  );
}
