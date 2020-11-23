import React from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
const PhotoShop = () => (
  <section className="gallery">
    <div className="gallery_img">
      <Link
        to={require("../../../assets/portfolio/photoshop/banner11.webp")}
        target="_blank"
      >
        <img
          src={require("../../../assets/portfolio/photoshop/banner11.webp")}
        />
        <img
          src={require("../../../assets/icons/search.png")}
          className="search-icon"
        />
      </Link>
    </div>
    {/* <div className="gallery_img">
      <Link
        to={require("../../../assets/portfolio/photoshop/banner10.webp")}
        target="_blank"
      >
        <img
          src={require("../../../assets/portfolio/photoshop/banner10.webp")}
        />
        <img
          src={require("../../../assets/icons/search.png")}
          className="search-icon"
        />
      </Link>
    </div> */}
    <div className="gallery_img">
      <Link
        to={require("../../../assets/portfolio/photoshop/banner9.webp")}
        target="_blank"
      >
        <img
          src={require("../../../assets/portfolio/photoshop/banner9.webp")}
        />
        <img
          src={require("../../../assets/icons/search.png")}
          className="search-icon"
        />
      </Link>
    </div>
    <div className="gallery_img">
      <Link
        to={require("../../../assets/portfolio/photoshop/banner1.webp")}
        target="_blank"
      >
        <img
          src={require("../../../assets/portfolio/photoshop/banner1.webp")}
        />
        <img
          src={require("../../../assets/icons/search.png")}
          className="search-icon"
        />
      </Link>
    </div>{" "}
    <div className="gallery_img">
      <Link
        to={require("../../../assets/portfolio/photoshop/banner2.webp")}
        target="_blank"
      >
        <img
          src={require("../../../assets/portfolio/photoshop/banner2.webp")}
        />
        <img
          src={require("../../../assets/icons/search.png")}
          className="search-icon"
        />
      </Link>
    </div>{" "}
    <div className="gallery_img">
      <Link
        to={require("../../../assets/portfolio/photoshop/banner3.webp")}
        target="_blank"
      >
        <img
          src={require("../../../assets/portfolio/photoshop/banner3.webp")}
        />
        <img
          src={require("../../../assets/icons/search.png")}
          className="search-icon"
        />
      </Link>
    </div>{" "}
    <div className="gallery_img">
      <Link
        to={require("../../../assets/portfolio/photoshop/banner4.webp")}
        target="_blank"
      >
        <img
          src={require("../../../assets/portfolio/photoshop/banner4.webp")}
        />
        <img
          src={require("../../../assets/icons/search.png")}
          className="search-icon"
        />
      </Link>
    </div>{" "}
    <div className="gallery_img">
      <Link
        to={require("../../../assets/portfolio/photoshop/banner5.webp")}
        target="_blank"
      >
        <img
          src={require("../../../assets/portfolio/photoshop/banner5.webp")}
        />
        <img
          src={require("../../../assets/icons/search.png")}
          className="search-icon"
        />
      </Link>
    </div>{" "}
    <div className="gallery_img">
      <Link
        to={require("../../../assets/portfolio/photoshop/banner6.webp")}
        target="_blank"
      >
        <img
          src={require("../../../assets/portfolio/photoshop/banner6.webp")}
        />
        <img
          src={require("../../../assets/icons/search.png")}
          className="search-icon"
        />
      </Link>
    </div>{" "}
    <div className="gallery_img">
      <Link
        to={require("../../../assets/portfolio/photoshop/banner7.webp")}
        target="_blank"
      >
        <img
          src={require("../../../assets/portfolio/photoshop/banner7.webp")}
        />
      </Link>
    </div>
    <div className="gallery_img">
      <Link
        to={require("../../../assets/portfolio/photoshop/banner8.webp")}
        target="_blank"
      >
        <img
          src={require("../../../assets/portfolio/photoshop/banner8.webp")}
        />
        <img
          src={require("../../../assets/icons/search.png")}
          className="search-icon"
        />
      </Link>
    </div>
  </section>
);
export default PhotoShop;
