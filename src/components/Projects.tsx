import "../styles/Projects.css";

interface Project {
    projectName: string;
    imgSrc?: string;
    projectLink?: string;
    gitLink?: string;
}

function Projects() {

    const projectsArray: Array<Project> = [
        {
            projectName: "Snapimals",
            imgSrc: "",
            projectLink: "",
            gitLink: "",
        },
    ]

    return (
        <div id="projects-container">
            <h1 id="projects-heading">Projects</h1>
            <div id="separator"></div>
            <p id="projects-para">Here are some of my favourite Projects</p>
            <div id="projects-box" className="box">
                <h1>Coming Soon!</h1>
            </div>
        </div>
    )
}

export default Projects;