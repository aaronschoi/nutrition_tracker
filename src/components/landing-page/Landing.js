import LandingContainer from "./LandingContainer";
import LandingLogin from "./LandingLogin/LandingLogin";
import Registration from "./registration/Registration";
import { Switch, Route, Link } from "react-router-dom";

export default function Landing() {
  return (
    <Switch>
      <Route path="/registration">
        <LandingContainer>
          <h3 className="landing-question">
            Have an Account Already? <Link className="landing-link" to="/">Click Here</Link>
          </h3>
          <Registration />
        </LandingContainer>
      </Route>
      <Route path="/">
        <LandingContainer>
          <h3 className="landing-question">
            New User? <Link className="landing-link" to="/registration">Click Here</Link>
          </h3>
          <LandingLogin />
        </LandingContainer>
      </Route>
    </Switch>
  );
}
