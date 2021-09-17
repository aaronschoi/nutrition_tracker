import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { adminDELETE, adminGet } from "../../../api/backend/api";

export default function User({
  user: { user_id, username, avatar, first, last, sex },
}) {
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

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
        dispatch({ type: "panel-off" });
        setTimeout(() => {
          dispatch({type: "panel-on"})
          history.push('/dashboard')
        }, 3000)
      }
    }
  };

  const userUI = (
    <li className="user-container">
      <div className="user-content">
      <img className="user-avatar" src={avatar} alt={`${first} ${last}`} />
      <div className="user-content-column">
      <h4 className="user-name">{`${first} ${last}`}</h4>
      <div className="user-content-body">
        <p className="user-content-element">Sex: {sex}</p>
        <p className="user-content-element">Username: {username}</p>
      </div>
      </div>
      </div>
      <button className="user-button" type="button" onClick={clickHandler}>
        DELETE USER
      </button>
    </li>
  )

  return (
    <>
    {`${user.first} ${user.last}` === `${first} ${last}` ? null : userUI}
    </>
  );
}
