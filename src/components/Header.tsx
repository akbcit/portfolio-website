import "../styles/Header.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Hamburger from "./Hamburger";

interface Link {
  title: string;
  url: string;
}

function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const [screenSize, setScreenSize] = useState<string>("desktop");

  const links: Array<Link> = [
    {
      url: "/#about",
      title: "About",
    },
    {
      url: "/#projects",
      title: "Projects",
    },
    {
      url: "/#hobbies",
      title: "Hobbies",
    },
    {
      url: "/#resume",
      title: "Resume",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      const matches = window.matchMedia("(max-width: 768px)").matches;
      // Your logic here, for example:
      if (matches) setScreenSize("mobile");
    };

    // call the function to set the initial state
    handleResize();

    // listen for resize events
    window.addEventListener("resize", handleResize);

    // function to handle scroll to change header appearance
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
      setIsHidden(window.scrollY > 150);
    };
    // attach event listener
    window.addEventListener("scroll", handleScroll);
    // clean up the event listener on unmounting
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [logoSrc, setLogoSrc] = useState<string>("/images/logo.png");
  // give an initial class
  let headerClasses: string = "header";
  // add classes based on scroll
  if (isScrolled) headerClasses += " with-border";
  if (isHidden) headerClasses += " hidden";
  // when logo is hovered
  const handleMouseOver = (): void => {
    setLogoSrc("/images/logo-rainbow.png");
  };
  // when not hovered
  const handleMouseOut = (): void => {
    setLogoSrc("/images/logo.png");
  };
  return (
    <header className={headerClasses}>
      <img
        src={logoSrc}
        alt="logo"
        id="logo"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      ></img>
      <nav id="header-right">
        {screenSize === "desktop" ? (
          <ul>
            {links.map((link, index) => {
              return (
                <li key={`link-${index}`}>
                  <NavLink to={link.url}>{link.title}</NavLink>
                </li>
              );
            })}
          </ul>
        ) : (
          <Hamburger links={links}></Hamburger>
        )}
      </nav>
    </header>
  );
}

export default Header;
