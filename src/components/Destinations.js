import { useState, useContext } from "react";
import DestinationsContext from "../context/DestinationsContext";
import DestinationsList from "./DestinationsList";
const Destinations = () => {
    const {destinationsData: {destinations}} = useContext(DestinationsContext)
  const [state] = useState({
    heading:
      "Discover the most engaging places in the world with Travel Friends",
    paragraph:
      "Travel is a brutality. It forces you to trust strangers and to lose sight of all that familiar comforts of home and friends.You are constantly of balance. Nothing is yours except the essential things Air, Sleep, Dream, the sea, the sky-all things tending towards the eternal or what we imagine of it.",
  });
  return (
    <div className="destinations">
      <div className="container">
        <div className="row mr-minus-15 ml-minus-15">
          <div className="col-6 p15">
            <h3 className="destinations_heading animation">{state.heading}</h3>
          </div>
          <div className="col-6 p15">
            <p className="destinations_paragraph animation">{state.paragraph}</p>
          </div>
        </div>
        <div className="destinations_block mr-minus-15 ml-minus-15">
            <div className="row">
                {destinations.map((destination) => {
                    return(
                        <DestinationsList 
                        destination = {destination}
                        key = {destination.id}
                        />
                    )
                })}
            </div>
        </div>
      </div>
    </div>
  );
};
export default Destinations;
