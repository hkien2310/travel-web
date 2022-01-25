import DestinationsDetails from "./DestinationsDetails";
const DestinationsInfo = ({ details }) => {
  return (
    <div className="destinationsInfo">
      <div className="container">
        <h2 className="heading animation">Over View</h2>
        <div className="row">
          <div className="col-8 animation">
            <p className="destinationsInfo_p">{details.details}</p>
          </div>
        </div>
        <h2 className="heading animation">Good to Know</h2>
        <div className="row">
          <div className="col-8">
            <DestinationsDetails text="Language" content={details.language} />
            <DestinationsDetails text="Currency" content={details.currency} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default DestinationsInfo;
