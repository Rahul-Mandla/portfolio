import React from "react";
import "./footer.scss";
const Footer = () => (
  <div className="footer">
    <div className="contact-details">
      <img className="foooter-logo" src={require("../../assets/pr11.png")} />
      <span className="copyright">&copy;</span>
      <p>contact me</p>
      <div className="wa-ig">
        <div className="footer-contact">
          <img
            className="footer-icon"
            src={require("../../assets/icons/wa.png")}
          />
          <span>7009484027</span>
        </div>
        <div className="footer-contact">
          <img
            className="footer-icon"
            src={require("../../assets/icons/google.png")}
          />
          <span>prabhramgarhia7700</span>
        </div>
        <div className="footer-contact">
          <img
            className="footer-icon"
            src={require("../../assets/icons/ig.png")}
          />
          <span>pr_graphics_7700</span>
        </div>
      </div>
    </div>
  </div>
);
export default Footer;
