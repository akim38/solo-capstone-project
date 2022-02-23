import { NavLink } from "react-router-dom";
import LoginForm from "../auth/LoginForm";
import SignUpForm from "../auth/SignUpForm";

import './SplashPage.css';

const SplashPage = () => {
    return (
        <div className="background" id="login-background">
            <div className="login-area">
                <div className="form-box">
                    <div className="title-area">
                        <h2 className="title">QueWhat</h2>
                        <p className="intro">A place to ask questions and get answers!</p>
                    </div>
                    <div className="auth-area">
                        <SignUpForm />
                        <LoginForm />
                    </div>
                    <div className="link-area">
                        <NavLink to='/about' exact={true} activeClassName='active'>
                            About
                        </NavLink>
                        <a href='https://github.com/akim38/solo-capstone-project' className="about__link" target="_blank" rel="noreferrer">Github</a>
                        <a href='https://www.linkedin.com/in/aletheia-kim-47086922a/' className="about__link" target="_blank" rel="noreferrer">LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SplashPage;
