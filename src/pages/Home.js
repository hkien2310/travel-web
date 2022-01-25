import Header from "../components/Header";
import { useState, useContext, useEffect } from "react";
import {Helmet} from "react-helmet-async"
import Model from "../components/Model";
import ModelContext from "../context/ModelContext";
import { OPEN_MODEL } from "../context/type/ModelType";
import Register from "../auth/Register";
import Login from "../auth/Login";
import Destinations from "../components/Destinations";
import Services from "../components/services/Services";
import Reviews from "../components/reviews/Reviews";
import GalleryComponent from "../components/gallery/GalleryComponent";
import Footer from "../components/footer/Footer";

const Home = () => {
  const {dispatch} = useContext(ModelContext);
  const [state] = useState({
    heading: "We are travel friends",
    des: "Come on and join with us",
  });
  const [registerModel] = useState("registerModel");
  const [loginModel] = useState("loginModel");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
    <Helmet>
      <title>Travel Friend </title> 
      <meta name="description" content="travel to the world with travel friend"></meta>
      <meta name="keywords" content="travel, travel tours, airline" />
    </Helmet>
      <Header titleHeader={state.heading} description={state.des}>
        <button 
          className="btn_default" 
          onClick={() => dispatch({
            type: OPEN_MODEL,
            payload: registerModel
          })}
        >
            Connect
        </button>
      </Header>
      <Model current={registerModel}>
        <Register currentModel={loginModel}/>
      </Model>
      <Model current={loginModel}>
        <Login currentModel={registerModel}/>
      </Model>
      <Destinations />
      <Services />
      <Reviews />
      <GalleryComponent />
      <Footer />
    </>
  );
};

export default Home;
