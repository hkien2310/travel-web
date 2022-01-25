import { LazyLoadImage } from "react-lazy-load-image-component";


const CitiesImage = ({city}) => {
  return (
    <div className="cities_body_image">
      <LazyLoadImage src={city.image} />
      <div
        className={
          city.status === "Bestselling"
            ? "bestselling"
            : city.status === "New"
            ? "new"
            : city.status === "Hot"
            ? "hot"
            : ""
        }
      >
        {city.status}
      </div>
    </div>
  );
};
export default CitiesImage;
