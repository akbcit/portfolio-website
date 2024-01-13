import "../styles/Socials.css";

// define interface for social links
interface Link {
    siteName: string;
    url: string;
    iconSrc?: string;
}

function Socials() {
    const socialLinks: Array<Link> = [
        {
            siteName: "LinkedIn",
            url: "https://www.linkedin.com/in/aditya-k-71a356a0/",
            iconSrc: "/images/linkedIn-logo.svg"
        },
        {
            siteName: "GitHub",
            url: "https://github.com/akbcit",
            iconSrc: "/images/GitHub-logo.png"
        },
    ];
    // function to go to a site
    const goToSite = (item:Link):void=>{
        window.open(item.url,'_blank')
    }

    return (
        <div id="socials-panel">
            {socialLinks.map((item, index) => {
                return <img key={index} id={`${item.siteName}-logo`} alt={`${item.siteName}-logo`} className="socials-logo" src={item.iconSrc} onClick={()=>{goToSite(item)}}></img>
            })}
        </div>
    )
}

export default Socials;