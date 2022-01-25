import { useState } from "react";
import {LazyLoadImage} from "react-lazy-load-image-component";
import footerLogo from "../../assets/logo.png"

const FooterIntro = () => {
    const [state] = useState({
        intro: "Travel friends is a traveling agency, we arrange tours to the world famous and most beautiful countries. Since 2005 we provide high quality services to our vaulable customers"
    })
    return (
        <div className="footer_intro">
            <div className="footer_intro_image">
                <LazyLoadImage src={footerLogo} alt="" />
            </div>
            <p className="footer_intro_msg">
                {state.intro}
            </p>
        </div>
    )    
}
export default FooterIntro;