import { useContext, useState } from "react";
import GalleryContext from "../../context/GalleryContext";
import GalleryImage from "./GalleryImage";
import LightBox from "./LightBox";

const GalleryComponent = () => {
  const {
    galleryStore: { gallery, lightBoxStatus },
    dispatch,
  } = useContext(GalleryContext);
  const [heading] = useState("Travel Captured");
  return (
    <>
    {lightBoxStatus ? <LightBox /> : ""}
      <div className="gallery">
        <div className="container">
          <h2 className="heading mb-55 animation">{heading}</h2>
          <div className="row">
            {gallery.length > 0
              ? gallery.map((item, index) => (
                  <GalleryImage key={index} value={item} />
                ))
              : ""}
          </div>
        </div>
      </div>
    </>
  );
};
export default GalleryComponent;
