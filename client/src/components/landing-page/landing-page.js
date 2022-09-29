import {useNavigate } from "react-router-dom";
import './landingPage.css'

const LandingPage = () => {

    const navigate = useNavigate();


    const handleKeyDown = () => {
        navigate("/posts")
    }

    return (
        <div className="landing-container">
            <div id="image-container">
                <img src="./images/insta.jpg" alt="landing"/>
            </div>
            <div>
                <h1>10X Team 4</h1>
                <button onClick={handleKeyDown}>Enter</button>
            </div>
        </div>
    );
}

export default LandingPage;