import { useEffect } from "react";
import AnimationContext from "../AnimationContext";

const AnimationProvider = (props) => {
    const scrollAnimation = () => {
        const elements = document.querySelectorAll(".animation")
        elements.forEach((element) => {
            const elementPose = element.getBoundingClientRect().top;
            const viewPortHeight = window.innerHeight - 100;
            if (elementPose < viewPortHeight) {
                element.classList.add("animate")
            } else {
                element.classList.remove("animate")
            }
        })
    }
    useEffect(() => { 
        window.addEventListener("scroll", scrollAnimation)
    }, [])
    return(
        <AnimationContext.Provider value>
            {props.children}
        </AnimationContext.Provider>

    )
}
export default AnimationProvider;