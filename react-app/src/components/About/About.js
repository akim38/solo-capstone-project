import './About.css';

const About = () => {
    return (
        <div className="about-div">
            <p>QueWhat is a Quora clone created by Aletheia Kim. More coming soon!
            </p>
            <div className="link-area">
                <a href='https://github.com/akim38/solo-capstone-project' className="about__link" target="_blank" rel="noreferrer">Github</a>
                <a href='https://www.linkedin.com/in/aletheia-kim-47086922a/' className="about__link" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
        </div>
    )
};

export default About;
