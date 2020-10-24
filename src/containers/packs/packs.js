import React from "react";
const Packs = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <img
        src={require("../../assets/undercon.svg")}
        className="image-fluid justify-content-center"
        style={{ height: 300, width: "100%" }}
      />
      <h4>Under Construction...</h4>
    </div>
  );
};
export default Packs;
