import { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import "../styles/PageHome.css";
import Header from "../components/Header";
import Intro from "../components/Intro";
import ScrollPrompt from "../components/ScrollPrompt";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Hobbies from "../components/Hobbies";
import Footer from "../components/Footer";

function PageHome() {
    const location = useLocation();

     useEffect(():void => {
        document.title = "Home";
        // get hash / title
        const hash = location.hash;
        // if there is a hash find the corresponding section
        if (hash) {
            // get element beinf references
            const section = document.querySelector(hash);
            if (section) {
                // if section is found, scroll to it smoothly
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <main id="page-home">
            <Header />
            <Intro />
            <ScrollPrompt />
            <div id="about">
                <AboutMe />
            </div>
            <div id="projects">
                <Projects />
            </div>
            <div id="hobbies">
                <Hobbies />
            </div>
            <Footer/>
        </main>
    )
}

export default PageHome;