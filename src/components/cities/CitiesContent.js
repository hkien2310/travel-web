import { AiOutlineFieldTime } from "react-icons/ai";
import RoomAndFood from "./RoomAndFood";

const CitiesContent = ({city}) => {
  const formatmoney = (money) => {
    return `${money}.00`;
  };
  return (
    <div className="cities_body_content">
      <div className="cities_body_content_top">
        <div className="cities_body_content_top_name">{city.name}</div>
        <div className="cities_body_content_top_duration">
          <AiOutlineFieldTime size={18} color="#df2189" />
          <div className="cities_body_content_top_duration_time">
            {city.duration}
          </div>
        </div>
      </div>
      <div className="cities_body_content_price">
        <span className="cities_body_content_price_dollor">$</span>
        {formatmoney(city.price)}
      </div>
      <div className="cities_body_content_roomandfood">
        <RoomAndFood name="Room" value={city.room} />
        <RoomAndFood name="Food" value={city.food} />
        <div className="cities_body_content_roomandfood_button btn_dark_buy">
          BUY NOW
        </div>
      </div>
    </div>
  );
};
export default CitiesContent;
