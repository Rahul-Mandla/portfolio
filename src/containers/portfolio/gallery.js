import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
const Gallery = (props) => (
  // props.name.first !== undefined ? (
  <React.Fragment>
    <div className="gallery_img">
      <div className="img_detail">
        <h4>
          {props.name.first} {props.name.last}
        </h4>
        <p>
          {" "}
          {props.address.city},{props.address.state},{props.address.country}
        </p>
      </div>
      <img src={props.image} />
    </div>
  </React.Fragment>
);
// ) : null;

export default Gallery;
