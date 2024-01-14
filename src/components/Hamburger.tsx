import { useEffect, useState } from "react";
import "../styles/Hamburger.css";
import { NavLink } from "react-router-dom";


function Hamburger({ links }) {

    const [menuState, setMenuState] = useState<string>("hidden");
    const [barsConfig, setBarsConfig] = useState<string>("parallel");

    const toggleMenu = (): void => {
        if (menuState === "hidden") {
            setMenuState("shown");
            setBarsConfig("cross");
            document.body.classList.add("no-scroll");
        }
        else if (menuState === "shown") {
            setMenuState("hidden");
            setBarsConfig("parallel");
            document.body.classList.remove("no-scroll");
        }
    }

    return (
        <button className={`hamburger-menu ${menuState}`} id="btn-menu" onClick={toggleMenu}>
            <span className="hamburger-menu-content">
                <span className="sr-only">Menu</span>
                <div id="bars-group">
                    <span id="bar-1" className={`bar ${barsConfig}`}></span>
                    <span id="bar-2" className={`bar ${barsConfig}`}></span>
                    <span id="bar-3" className={`bar ${barsConfig}`}></span>
                </div>
            </span>
            {menuState === "shown" && (
                <div id="mobile-menu">
                    <ul id="mobile-menu-list">
                        {links.map((link, index) => {
                            return (
                                <li key={`link-${index}`}>
                                    <NavLink to={link.url}>{link.title}</NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </button>
    )
}

export default Hamburger;