import LoginForm from "../auth/LoginForm";
import SignUpForm from "../auth/SignUpForm";

import './SplashPage.css';

const SplashPage = () => {
    return (
        <div className="background" id="login-background">
            <div className="login-area">
                <div className="form-box">
                    <div>
                        <h2 className="title">QueWhat</h2>
                        <p className="intro">A place to ask questions and get answers!</p>
                    </div>
                    <SignUpForm />
                    <LoginForm />
                </div>
            </div>
        </div>
    )
};

export default SplashPage;
