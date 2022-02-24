import { NavLink } from "react-router-dom";
import About from "../About/About";
import LoginForm from "../auth/LoginForm";
import SignUpForm from "../auth/SignUpForm";
import SignUpFormModal from "../auth/SignUpFormModal";

import './SplashPage.css';

const SplashPage = () => {
    return (
        <div className="background" id="login-background">
            <div className="login-area">
                <div className="form-box">
                    <div className="title-area">
                        <h1 className="title">QueWhat</h1>
                        <p className="intro">A place to ask questions and get answers!</p>
                    </div>
                    <div className="auth-area">
                        <SignUpFormModal />
                        <LoginForm />
                    </div>
                    <div className="link-area">
                        {/* <NavLink to='/about' exact={true} activeClassName='active'>
                            About
                        </NavLink> */}
                        <a href='https://github.com/akim38/solo-capstone-project' className="about__link" target="_blank" rel="noreferrer">Github</a>
                        <a href='https://www.linkedin.com/in/aletheia-kim-47086922a/' className="about__link" target="_blank" rel="noreferrer">LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SplashPage;
