import { useState, useContext } from "react";
import SharedContext from "../../context/SharedContext"
import ServicesList from "./ServicesList";
import ServicesLeft from "./SevicesLeft";
const Services = () => {
    const {sharedData: {servicesData},} = useContext(SharedContext);
    console.log(servicesData)
    const [state] = useState({
        heading: "why customers love travel friends? Because we provide unique services.",
        subHeading: "Our aim is to provide professinal and unique service to customers, and we have provided high quality services to our customer thats why they love travel friends."
    })
    return (
        <div className="services">
            <div className="services_content">
                <div className="container">
                    <div className="row ml-minus-15 mr-minus-15 services_content_container">
                        <div className="col-6 p15 animation">
                        <ServicesLeft heading={state.heading} subHeading={state.subHeading}/>
                        </div>
                        <div className="col-6 p15">
                        <ServicesList servicesData={servicesData}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Services;