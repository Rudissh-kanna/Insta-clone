import './header.css'
import {useNavigate } from "react-router-dom";

function Header(){
    const navigate = useNavigate();

    function handleClick(event) {
        navigate('/posts/add')
    }

    return (
        <header id="header-container">
            <i className="fa-solid fa-bullseye" id="bullseye"></i> 
            <span>InstaClone</span>
            <span id="space"></span>
            <i className="fa-brands fa-instagram" id="insta-symbol" onClick={handleClick}></i>
        </header>
    );
}

export default Header;