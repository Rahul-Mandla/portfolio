import React from "react";
import { Link } from "react-router-dom";
const Premiere = () => (
  <section className="gallery">
    <div className="gallery_img">
      <Link
        to={require("../../../assets/portfolio/portsample.png")}
        target="_blank"
      >
        <iframe
          width="450"
          height="315"
          src="https://www.youtube.com/embed/x9EstLbfjUM"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Link>
    </div>
    <div className="gallery_img">
      <Link to={"https://www.youtube.com/watch?v=9OimphG4Er4"} target="_blank">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/9OimphG4Er4"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Link>
    </div>
  </section>
);
export default Premiere;
