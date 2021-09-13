import Avatar from "./avatar/Avatar";
import Greeting from "./greeting/Greeting";
import { Link } from "react-router-dom";
import FoodLog from "./food-log/FoodLog";
import { useSelector } from "react-redux";
import Admin from "./admin/Admin";

export default function Dashboard() {

    const store = useSelector(state => state)
    console.log(store)

    return (
        <div>
        <Greeting />
        <Avatar />
        <Link to="/profile">Edit Profile</Link>
        <Link to="/foodlog">Add to the Food Log</Link>
        <FoodLog />
        <Admin />
        </div>
    )
}