import React from "react";
import { Link } from "react-router-dom";
const Blender = () => (
  <section className="gallery">
    <div className="gallery_img">
      <Link
        to={require("../../../assets/portfolio/blender/blend1.png")}
        target="_blank"
      >
        <img src={require("../../../assets/portfolio/blender/blend1.png")} />{" "}
        <img
          src={require("../../../assets/icons/search.png")}
          className="search-icon"
        />
      </Link>
    </div>
    <div className="gallery_img">
      <Link
        to={require("../../../assets/portfolio/blender/blend2.png")}
        target="_blank"
      >
        <img src={require("../../../assets/portfolio/blender/blend2.png")} />{" "}
        <img
          src={require("../../../assets/icons/search.png")}
          className="search-icon"
        />
      </Link>
    </div>{" "}
    <div className="gallery_img">
      <Link
        to={require("../../../assets/portfolio/blender/blend3.png")}
        target="_blank"
      >
        <img src={require("../../../assets/portfolio/blender/blend3.png")} />{" "}
        <img
          src={require("../../../assets/icons/search.png")}
          className="search-icon"
        />
      </Link>
    </div>
  </section>
);
export default Blender;
