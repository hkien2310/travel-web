import { useContext } from "react";
import {LazyLoadImage} from "react-lazy-load-image-component";
import GalleryContext from "../../context/GalleryContext";
import { CLOSE_LIGHTBOX } from "../../context/type/GalleryType";

const LightBox = () => {
    const {galleryStore: {currentLightBox}, dispatch} = useContext(GalleryContext);
    const closeLightBox = (e) => {
        const className = e.target.getAttribute("class");
        if (className === "gallery_lightbox") {
            dispatch ({type: CLOSE_LIGHTBOX})
        }
    }
    return (
        <div className="gallery_lightbox" onClick={closeLightBox}>
            <h4>{currentLightBox.name}</h4>
                <div className="gallery_lightbox_card">
                    <div className="gallery_light">
                        <LazyLoadImage src={currentLightBox.image} alt={currentLightBox.image} />
                    </div>
                </div>
        </div>
    )
}
export default LightBox;