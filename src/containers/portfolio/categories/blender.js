import React from "react";
import { Link } from "react-router-dom";
const Blender = () => (
  <section className="gallery">
    <div className="gallery_img">
      <Link
        to={require("../../../assets/portfolio/blender/blend5.webp")}
        target="_blank"
      >
        <img src={require("../../../assets/portfolio/blender/blend5.webp")} />{" "}
        <img
          src={require("../../../assets/icons/search.png")}
          className="search-icon"
        />
      </Link>
    </div>
    <div className="gallery_img">
      <Link
        to={require("../../../assets/portfolio/blender/blend4.webp")}
        target="_blank"
      >
        <img src={require("../../../assets/portfolio/blender/blend4.webp")} />{" "}
        <img
          src={require("../../../assets/icons/search.png")}
          className="search-icon"
        />
      </Link>
    </div>
    <div className="gallery_img">
      <Link
        to={require("../../../assets/portfolio/blender/blend1.webp")}
        target="_blank"
      >
        <img src={require("../../../assets/portfolio/blender/blend1.webp")} />{" "}
        <img
          src={require("../../../assets/icons/search.png")}
          className="search-icon"
        />
      </Link>
    </div>
    <div className="gallery_img">
      <Link
        to={require("../../../assets/portfolio/blender/blend2.webp")}
        target="_blank"
      >
        <img src={require("../../../assets/portfolio/blender/blend2.webp")} />{" "}
        <img
          src={require("../../../assets/icons/search.png")}
          className="search-icon"
        />
      </Link>
    </div>{" "}
    <div className="gallery_img">
      <Link
        to={require("../../../assets/portfolio/blender/blend3.webp")}
        target="_blank"
      >
        <img src={require("../../../assets/portfolio/blender/blend3.webp")} />{" "}
        <img
          src={require("../../../assets/icons/search.png")}
          className="search-icon"
        />
      </Link>
    </div>
  </section>
);
export default Blender;
