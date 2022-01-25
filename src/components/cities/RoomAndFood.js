import {BsCheck, BsX} from "react-icons/bs";

const RoomAndFood = ({name, value}) => {
    return(
        <div className="cities_body_content_roomandfood_content">
            <div className="cities_body_content_roomandfood_content_name">
                {name}
            </div>
            <div className="cities_body_content_roomandfood_content_value">
                {value ? <BsCheck size={30} color="#34D399"/> : <BsX size={30} color="#df2189"/>}
            </div>
        </div>
    )
}
export default RoomAndFood;