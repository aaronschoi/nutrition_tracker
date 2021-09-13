import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateUser } from "../../api/backend/api";

export default function Profile() {

    const history = useHistory();

    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const [ settings, setSettings ] = useState({
        ...user
    })

    const changeHandler = (event) => {
        setSettings({
          ...user,
          [event.target.name]: event.target.value,
        });
      };

    const cancelHander = event => {
        history.push('/dashboard')
    }

    const submitHandler = event => {
        event.preventDefault();
        if(window.confirm("Are you positive about this change?")) {
            updateUser(settings).then(data => dispatch({type: "retrieve-user", payload: data.data})).then(()=>history.push('/dashboard'))
        };
    }
    

  return (
    (<form onSubmit={submitHandler}>
        <input
          name="first"
          type="text"
          value={settings.first}
          onChange={changeHandler}
          placeholder="Enter your first name"
        />
        <input
          name="last"
          type="text"
          value={settings.last}
          onChange={changeHandler}
          placeholder="Enter your last name"
        />
        {/* year-month-date */}
        <input
          name="sex"
          type="text"
          value={settings.sex}
          onChange={changeHandler}
          placeholder="select your biological sex"
        />
        <input
          name="avatar"
          type="text"
          value={settings.avatar}
          onChange={changeHandler}
          placeholder="Enter a username"
        />
        <input
          name="usda"
          type="text"
          value={settings.usda}
          onChange={changeHandler}
          placeholder="Enter your USDA API KEY here"
        />
        <button type="submit">Save</button>
        <button type="button" onClick={cancelHander}>Cancel</button>
      </form>)
  );
}
