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
    (<form className="profile-container" onSubmit={submitHandler}>
      <div className="profile-top-input">
        <input
          className="general-input profile-element profile-top-element"
          name="first"
          type="text"
          value={settings.first}
          onChange={changeHandler}
          placeholder="Enter your first name"
        />
        <input
          className="general-input profile-element profile-top-element"
          name="last"
          type="text"
          value={settings.last}
          onChange={changeHandler}
          placeholder="Enter your last name"
        />
        <div className="radio-container profile-element profile-top-element">
        <div className="radio-element">
          <label className="radio-label">
            <input
              name="sex"
              type="radio"
              value="male"
              checked={settings.sex === "male"}
              onChange={changeHandler}
              className="radio"
            />
            <span className="checkmark"></span>
          </label>
          <h4 className="radio-element-name">male</h4>
        </div>
        <div className="radio-element">
          <label className="radio-label">
            <input
              name="sex"
              type="radio"
              value="female"
              checked={settings.sex === "female"}
              onChange={changeHandler}
              className="radio"
            />
            <span className="checkmark"></span>
          </label>
          <h4 className="radio-element-name">female</h4>
        </div>
      </div>
      </div>
      <div className="profile-bottom-input">
        <input
          className="general-input profile-input profile-element"
          name="avatar"
          type="text"
          value={settings.avatar}
          onChange={changeHandler}
          placeholder="Enter a username"
        />
        <input
          className="general-input profile-input profile-element"
          name="usda"
          type="text"
          value={settings.usda}
          onChange={changeHandler}
          placeholder="Enter your USDA API KEY here"
        />
        </div>
        <div className="profile-button-container">
        <button className="profile-button" type="submit">Save</button>
        <button type="button" onClick={cancelHander}>Cancel</button>
        </div>
      </form>)
  );
}
