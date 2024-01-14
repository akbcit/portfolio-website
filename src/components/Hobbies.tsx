import "../styles/Hobbies.css";

// interface Hobby {
//     hobbyName: string;
//     imgSrc?: string;
// }

function Hobbies() {

    // const hobbiesArray: Array<Hobby> = [
    //     {
    //         hobbyName: "Hobby",
    //         imgSrc: "",
    //     },
    // ]

    return (
        <div id="hobbies-container">
            <h1 id="hobbies-heading">Hobbies</h1>
            <div id="separator"></div>
            <p id="hobbies-para">In addition to developing applications, here are some activities I love doing in my leisure time!</p>
            <div id="hobbies-box" className="box">
                <h1>Coming Soon!</h1>
            </div>
        </div>
    )
}

export default Hobbies;