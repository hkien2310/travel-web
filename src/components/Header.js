// import { useState } from "react";
import pictures from "../assets/images/screen.png";
import video from "../assets/videos/header.mp4";
import logo from "../assets/images/logo.png";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {useNavigate} from "react-router-dom";

const Header = ({ titleHeader, description, children, image }) => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate('/')
  }
  return (
    <div className="header">
      <div className="container">
        <div className="header_logo">
          <LazyLoadImage src={logo} alt="logo" onClick={goToHome} />
        </div>
      </div>
      <div className="header_video">
        {image ? (
          <LazyLoadImage src={image} alt={image} className=""/>
        ) : (
          <video src={video} autoPlay muted loop poster={pictures} />
        )}
      </div>
      <div className="header_contents">
        <div className="header_contents_text">
          <div className="header_contents_text_child">
            <h1 className="header_contents_text_child_h1">{titleHeader}</h1>
            <p className="header_contents_text_child_p">{description}</p>
            <div className="header_contents_text_child_link">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
