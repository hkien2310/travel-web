const DestinationsDetails = ({text, content}) => {
  return (
      <div className="destinationsInfo_details">
        <div className="destinationsInfo_head animation">{text}</div>
        <div className="destinationsInfo_text animation">{content}</div>
      </div>
  );
};
export default DestinationsDetails;
