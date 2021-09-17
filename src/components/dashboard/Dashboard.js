import Avatar from "./avatar/Avatar";
import Greeting from "./greeting/Greeting";
import FoodLog from "./food-log/FoodLog";
import { useEffect } from "react";
import { getLog } from "../../api/backend/api";
import { useDispatch, useSelector } from "react-redux";

export default function Dashboard() {

  const { user, foodlog } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    getLog(user.user_id).then(foodlog => dispatch({type: "retrieve-foodlog", payload: foodlog.data}))
  }, [])

  return (
    <div className="dashboard-container">
      <div className="dashboard-greeting-container">
        <Greeting />
        <Avatar />
      </div>
      <FoodLog />
    </div>
  );
}
