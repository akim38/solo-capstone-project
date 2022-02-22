import LoginForm from "../auth/LoginForm"
import SignUpForm from "../auth/SignUpForm"

const SplashPage = () => {
    return (
        <div className="background">
            <div className="form-box">
                <SignUpForm />
                <LoginForm />
            </div>
        </div>
    )
};

export default SplashPage;
