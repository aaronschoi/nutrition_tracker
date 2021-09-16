import Avatar from "./avatar/Avatar";
import Greeting from "./greeting/Greeting";
import FoodLog from "./food-log/FoodLog";

export default function Dashboard() {
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
