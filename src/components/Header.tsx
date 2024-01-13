import "../styles/Header.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Header() {

    const [logoSrc, setLogoSrc] = useState<string>("/images/logo.png");

    // when hovered
    const handleMouseOver = (): void => {
        setLogoSrc("/images/logo-rainbow.png");
    };
    // when not hovered
    const handleMouseOut = (): void => {
        setLogoSrc("/images/logo.png");
    };

    return (
        <header>
            <img src={logoSrc} alt="logo" id="logo" onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut} ></img>
            <nav id="header-right">
                <ul>
                    <li>
                        <NavLink to="/#about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/#projects">Projects</NavLink>
                    </li>
                    <li>
                        <NavLink to="/#hobbies">Hobbies</NavLink>
                    </li>
                    <li>
                        <NavLink to="/resume">Resume</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;