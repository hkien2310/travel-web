import Header from "../../components/Header";
import Footer from "../footer/Footer"
import { Link } from "react-router-dom";

const PageContainer = ({ data, children }) => {
  return (
    <>
      <Header titleHeader={data.heading} />
      <div className="page">
        <div className="container">
          <div className="row">
            <div className="col-6">
              {children}
            </div>
            <div className="col-6">
              <div className="page_info">
                <h2 className="heading animation">{data.heading}</h2>
                <h1 className="page_info_heading animation">{data.pageHeading}</h1>
                <p className="page_info_msg animation">{data.message}</p>
                <div className="page_info_link animation">
                  <Link to="/" className="btn_dark animation">Back to Home</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default PageContainer;
