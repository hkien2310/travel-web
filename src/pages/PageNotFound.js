import {Helmet} from "react-helmet-async";
import { useState } from "react";
import PageNotFoundImage from "../assets/images/404.jpg";
import Header from "../components/Header"
import { Link } from "react-router-dom";
const PageNotFound = () => {
    const [state, setState] = useState({
        title: "404 PAGE NOT FOUND",
        paragraph: "Oops! Page not found!",
        // imageNotFound: {PageNotFoundImage}
    })
    return (
        <>
            <Helmet>
                <title>404 PAGE NOT FOUND</title>
            </Helmet>
            <Header titleHeader={state.title} description={state.paragraph} image={PageNotFoundImage}>
                <Link to="/" className="btn_default">Go to Home</Link>
            </Header>
        </>
    )
}
export default PageNotFound;