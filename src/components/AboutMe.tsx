import "../styles/AboutMe.css";

interface Skill{
    skillName: string;
    logoSrc?: string;
}

function AboutMe() {

    const skillsArr:Array<Skill>=[
        {
            skillName:"Node.js",
            logoSrc:"/images/node.png",
        },
        {
            skillName:"React.js",
            logoSrc:"/images/react.png",
        },
        {
            skillName:"Express.js",
            logoSrc:"/images/express.png",
        },
        {
            skillName:"SQL",
            logoSrc:"/images/sql.png",
        },
        {
            skillName:"MongoDB",
            logoSrc:"/images/mongoDb.svg",
        },
        {
            skillName:"Git",
            logoSrc:"/images/GitHub-logo.png",
        },
        {
            skillName:"ASP.NET Core",
            logoSrc:"/images/aspnetcore.png",
        },
        {
            skillName:"Angular",
            logoSrc:"/images/angular.png",
        },
        {
            skillName:"Vue",
            logoSrc:"/images/vue.png",
        },
    ]

    const quadrupledArr = [...skillsArr, ...skillsArr, ...skillsArr, ...skillsArr];

    return (
        <div id="about-me-container">
            <h1 id="about-me-heading">About Me</h1>
            <div id="separator"></div>
            <p id="about-me-para">With over 6 years of experience in Total Rewards and HR, my current journey is about mastering web software development to create powerful business solutions. My focus lies in developing innovative tools that drive change and efficiency in various business domains. As I advance through my SSD program, I am enthusiastic about crafting technology that not only keeps pace with evolving business landscapes but also shapes them. While I have an interest in HR technology, my primary goal is to develop versatile and transformative tools that benefit multiple business sectors.</p>
            <div id="slider-container">
            <div id="skills-slider">
                {quadrupledArr.map((item:Skill,index:number)=>{
                    return <div key={`skill-${index}`} className="slide skillBadge">
                        <img src={item.logoSrc} alt={`${item.skillName}-logo`}className="skill-logo"></img>
                        <p className="skill-name">{item.skillName}</p>
                    </div>
                })}
            </div>
            </div>
        </div>
    )
}

export default AboutMe;