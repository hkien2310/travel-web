import {LazyLoadImage} from "react-lazy-load-image-component";
import { useContext } from "react";
import GalleryContext from "../../context/GalleryContext";
import { OPEN_LIGHTBOX } from "../../context/type/GalleryType";

const GalleryImage = ({value}) => {
  const {dispatch} = useContext(GalleryContext);
  const openLightBox = (imgObj) => (
    dispatch({type: OPEN_LIGHTBOX, payload: imgObj})
  )
  return (
    <div className="col-3 animation" >
      <div className="gallery_image">
        <LazyLoadImage src={value.image} alt={value.image} onClick={() => openLightBox(value)}/>
      </div>
    </div>
  );
};
export default GalleryImage;
