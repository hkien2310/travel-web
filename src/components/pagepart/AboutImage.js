import {LazyLoadImage} from "react-lazy-load-image-component";
import AbImage from "../../assets/images/about.jpg";
const AboutImage = () => {
    return (
        <div className="page_image animation">
            <LazyLoadImage src={AbImage}/>
        </div>
    )
}
export default AboutImage;