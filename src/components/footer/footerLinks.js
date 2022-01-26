import { useContext, useState } from "react";
import DestinationsContext from "../../context/DestinationsContext";
import ShowFooterLink from "./ShowFooterLinks";

const FooterLinks = () => {
  const {
    destinationsData: { destinations },
  } = useContext(DestinationsContext);
  console.log(destinations);
  const [state] = useState({
    pages: [
      { id: 1, name: "home", route: "/" },
      { id: 2, name: "about", route: "/about" },
      { id: 3, name: "contact", route: "/contact" },
    ],
    partners: [
      { id: 1, name: "booking", route: "https://www.booking.com/" },
      { id: 2, name: "trivago", route: "https://www.trivago.com/" },
      { id: 3, name: "hostel world", route: "https://www.hostelworld.com/" },
      { id: 4, name: "trip advisor", route: "https://www.tripadvisor.com/" },
    ],
    headings: {
      pages: "pages",
      partners: "partners",
      destinations: "destinations",
    },
  });
  const { pages, partners, headings } = state;
  return (
    <div className="row">
      <div className="footer_col-4">
        <div className="col-4 p15">
          <h3 className="footer_heading">{headings.pages}</h3>
          <ShowFooterLink links={pages} />
        </div>
      </div>
      <div className="footer_col-4">
        <div className="col-4 p15">
          <h3 className="footer_heading">{headings.partners}</h3>
          <ShowFooterLink links={partners} external />
        </div>
      </div>
      <div className="footer_col-4">
        <div className="col-4 p15">
          <h3 className="footer_heading">{headings.destinations}</h3>
          <ShowFooterLink links={destinations} />
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
