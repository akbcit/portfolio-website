import { useState, useEffect } from "react";
import "../styles/Intro.css";

function Intro() {
    const maxPicRange: number = 2;
    const [introPicNum, setIntroPicNum] = useState<number>();
    // randomise intro pic 
    useEffect((): void => {
        const randNum: number = Math.floor(1 + Math.random() * maxPicRange);
        setIntroPicNum(randNum);
    }, [])

    return (
        <div id="intro-container">
            <img id="intro-pic" alt="aditya-image" src={`/images/intro-${introPicNum}.jpg`}></img>
            <div id="intro-text">
                <h1 id="intro-name">Aditya Kumar (Adi)</h1>
                <h3 id="intro-para">Full-Stack Developer passionate about crafting tools that simplify workflows. I blend watertight logic with intuitive UX to streamline complex challenges into user-friendly solutions.</h3>
            </div>
        </div>
    )
}

export default Intro;