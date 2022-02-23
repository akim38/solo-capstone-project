import LoginForm from "../auth/LoginForm";
import SignUpForm from "../auth/SignUpForm";

import './SplashPage.css';

const SplashPage = () => {
    return (
        <div className="background" id="login-background">
            <div className="login-area">
                <div className="form-box">
                    <SignUpForm />
                    <LoginForm />
                </div>
            </div>
        </div>
    )
};

export default SplashPage;
