// import imageFooter from "../assets/images/footerResources/footer.jpg"
import FooterIntro from "./FooterIntro";
import FooterLinks from "./footerLinks";

const Footer = () => {
  const footerStyles = {
    // background: imageFooter,
    background: "url(/assets/footerResources/footer.jpg)",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundRepet: "no-repeat",
  };
  return (
    <div className="footer" style={footerStyles}>
      <div className="footer_container ">
        <div className="container animation">
          <div className="footer_container_block">
            <div className="row">
              <div className="col-6 p15">
                <FooterIntro />
              </div>
              <div className="col-6 p15">
                <FooterLinks />
              </div>
            </div>
          </div>
          <div className="footer_bottom animation">
            <p>&copy; copy right travel friends {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
