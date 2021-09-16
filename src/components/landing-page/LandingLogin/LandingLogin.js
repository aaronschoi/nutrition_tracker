import LandingInfo from "./info/LandingInfo";
import Login from "./login/Login";

export default function LandingLogin() {
    return (
        <div className="landing-content-container">
            <LandingInfo />
            <Login />
        </div>
    )
}