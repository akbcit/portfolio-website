import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import "../styles/PageHome.css";
import Header from "../components/Header";
import Intro from "../components/Intro";
import ScrollPrompt from "../components/ScrollPrompt";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Hobbies from "../components/Hobbies";
import Footer from "../components/Footer";
import TextLoader from "../components/TextLoader";

function PageHome() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const location = useLocation();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 4100);
        return () => clearTimeout(timer);
    }, []);

    useEffect((): void => {
        document.title = "Home";
        const hash = location.hash;
        if (hash) {
            const section = document.querySelector(hash);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <>
            {isLoading ? <TextLoader /> : (
                <main id="page-home" className={!isLoading ? 'fade-in' : ''}>
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
                    <Footer />
                </main>
            )}
        </>
    )
}

export default PageHome;
