import LandingContainer from "./LandingContainer"
import LandingLogin from "./LandingLogin/LandingLogin";
import Registration from "./registration/Registration";
import {Switch, Route, Link} from "react-router-dom"

export default function Landing() {
    return (
        <LandingContainer>
            <Switch>
            <Route path="/registration">
            <h3>Have an Account Already? <Link to="/" >Click Here</Link></h3>
                    <Registration />
                </Route>
                <Route path="/">
                <h3>New User? <Link to="/registration" >Click Here</Link></h3>
                    <LandingLogin />
                </Route>
            </Switch>
        </LandingContainer>
    )
}