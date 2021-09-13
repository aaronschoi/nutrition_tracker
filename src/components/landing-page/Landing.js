import { useState } from "react"
import LandingContainer from "./LandingContainer"
import LandingLogin from "./LandingLogin/LandingLogin";
import Registration from "./registration/Registration";

export default function Landing() {
    
    const [ register, setRegister ] = useState(false);

    const clickHandler = event => {
        setRegister(current => !current)
    } 

    return (
        <LandingContainer>
            <h3>{register ? "Already have an account" : "New User"}? Click <span onClick={clickHandler}>Here</span></h3>
            {register ? <Registration /> : <LandingLogin />}
        </LandingContainer>
    )
}