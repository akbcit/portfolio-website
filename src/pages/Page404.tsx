import { useEffect } from "react";
import "../styles/Page404.css";
import {useNavigate} from "react-router-dom";

function Page404() {
    const navigate = useNavigate();
    useEffect((): void => {
        document.title = "404";
        setTimeout(() => { navigate("/"); }, 4300);
    }, []);

    return (
        <main>
            <div id="not-found-container">
                <h1 id="not-found-heading">404</h1>
                <p id="not-found-text">Not Found :(</p>
            </div>
        </main>
    )

}

export default Page404;