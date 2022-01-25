import { LazyLoadImage } from "react-lazy-load-image-component";
import { GiPositionMarker } from "react-icons/gi";
import { Link } from "react-router-dom";
const DestinationsList = ({ destination }) => {
  return (
    <div className="col-3 p15 ">
      <div className="destinations_card animation">
        <div className="destinations_card_img">
          <LazyLoadImage src={destination.image} />
        </div>
        <div className="destinations_card_layer">
          <div className="destinations_card_layer_content">
            <GiPositionMarker size={20}/>
            {destination.name}
          </div>
        </div>
        <div className="destinations_card_info">
            <div className="destinations_card_info_text">
                <Link className=" btn_light" to={`/details/${destination.id}`}>Explored</Link>
            </div>
        </div>
      </div>
    </div>
  );
};
export default DestinationsList;
