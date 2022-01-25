import { BiChevronRight } from "react-icons/bi";
import { useState } from "react";
const ServicesList = ({ servicesData }) => {
    const [current, setCurrent] = useState();
    const showDetail = (index) => {
        setCurrent(index)
    }
  return (
    <div className="animation">
      {servicesData.length > 0
        ? servicesData.map((serviceData, index) => {
            return (
              <div className="services_list" key={index}>
                <h4 className={`services_list_heading ${current === index ? "services_list_heading_active" : ""}`} onClick={() => showDetail(index)}>
                  <BiChevronRight size={22} className={current === index ? "services_list_down" : ""}/>
                  {serviceData.heading}
                </h4>
                <p className={`services_list_detail ${current === index ? "services_list_detail_show" : ""}`}>{serviceData.p}</p>
              </div>
            );
          })
        : ""}

    </div>
  )
  
};
export default ServicesList;
