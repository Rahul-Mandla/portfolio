import React, { useState, useEffect } from "react";
import "./portfolio.scss";
import Tabs from "./tabs/tabs";
import AfterEffects from "./categories/afterEffects";
import Blender from "./categories/blender";
import Premiere from "./categories/premiere";
import PhotoShop from "./categories/photoshop";
import Illustration from "./categories/illustration";

export default class Portfolio extends React.Component {
  componentDidMount = () => {
    const url = "";
  };
  render() {
    return (
      <React.Fragment>
        <h1 className="gallery_heading">Gallery</h1>
        <Tabs>
          <div
            label={
              <img
                src={require("../../assets/icons/AE.png")}
                className="tab_img"
              />
            }
          >
            <AfterEffects />
          </div>
          <div
            label={
              <img
                src={require("../../assets/icons/pr.png")}
                className="tab_img"
              />
            }
          >
            <Premiere />
          </div>
          <div
            label={
              <img
                src={require("../../assets/icons/ps.png")}
                className="tab_img"
              />
            }
          >
            <PhotoShop />
          </div>
          <div
            label={
              <img
                src={require("../../assets/icons/ill.png")}
                className="tab_img"
              />
            }
          >
            <Illustration />
          </div>
          <div
            label={
              <img
                src={require("../../assets/icons/blender.png")}
                className="tab_img"
              />
            }
          >
            <Blender />
          </div>
        </Tabs>
      </React.Fragment>
    );
  }
}
// export default Portfolio;
