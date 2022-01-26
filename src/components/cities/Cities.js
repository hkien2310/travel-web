import CitiesImage from "./CitiesImage";
import CitiesContent from "./CitiesContent";
import Footer from "../footer/Footer";
const Cities = ({ cities, name }) => {
  return (
    <>
      <div className="cities">
        <div className="container">
          <div className="cities_container">
            <h2 className="heading animation">City in {name}</h2>
            <div className="row">
              {cities.length > 0
                ? cities.map((city) => {
                    return (
                      <div className="col-3 p15 " key={city.id}>
                        <div className="cities_body animation">
                          <CitiesImage city={city} />
                          <CitiesContent city={city} />
                        </div>
                      </div>
                    );
                  })
                : `No city in ${name}`}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Cities;
