import React from "react";
import { Link } from "react-router-dom";
const Illustration = () => (
  <section className="gallery">
    <div className="gallery_img">
      <Link
        to={require("../../../assets/portfolio/illustration/illu1.png")}
        target="_blank"
      >
        <img
          src={require("../../../assets/portfolio/illustration/illu1.png")}
        />
        <img
          src={require("../../../assets/icons/search.png")}
          className="search-icon"
        />
      </Link>
    </div>
    <div className="gallery_img">
      <Link
        to={require("../../../assets/portfolio/illustration/illu2.png")}
        target="_blank"
      >
        <img
          src={require("../../../assets/portfolio/illustration/illu2.png")}
        />
        <img
          src={require("../../../assets/icons/search.png")}
          className="search-icon"
        />
      </Link>
    </div>
    <div className="gallery_img">
      <Link
        to={require("../../../assets/portfolio/illustration/illu3.png")}
        target="_blank"
      >
        <img
          src={require("../../../assets/portfolio/illustration/illu3.png")}
        />
        <img
          src={require("../../../assets/icons/search.png")}
          className="search-icon"
        />
      </Link>
    </div>
    <div className="gallery_img">
      <Link
        to={require("../../../assets/portfolio/illustration/illu4.png")}
        target="_blank"
      >
        <img
          src={require("../../../assets/portfolio/illustration/illu4.png")}
        />
        <img
          src={require("../../../assets/icons/search.png")}
          className="search-icon"
        />
      </Link>
    </div>
  </section>
);
export default Illustration;
