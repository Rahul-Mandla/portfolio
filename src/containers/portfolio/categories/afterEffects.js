import React from "react";
const AfterEffects = () => {
  return (
    <section className="justify-content-center">
      <div className="gallery_vid">
        <video className="ae-video" autoPlay controls>
          <source
            src={require("../../../assets/portfolio/after effects/AE1.mp4")}
            typeof="video/mp4"
          />
        </video>
      </div>
    </section>
  );
};
export default AfterEffects;
