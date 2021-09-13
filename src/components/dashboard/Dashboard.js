import Avatar from "./avatar/Avatar";
import Greeting from "./greeting/Greeting";
import { Link } from "react-router-dom";
import FoodLog from "./food-log/FoodLog";

export default function Dashboard() {
    return (
        <div>
        <Greeting />
        <Avatar />
        <Link to="/profile">Edit Profile</Link>
        <FoodLog />
        </div>
    )
}