import React from "react";
import "./card.css";
const Card = (props) => (
  <React.Fragment>
    <div className="card">
      <img className="card_img" src={props.cardimage} />
    </div>
    <div className="card_text">
      <p>{props.cardtxt.quote}</p>
      <span>-{props.cardtxt.author}</span>
    </div>
  </React.Fragment>
);

export default Card;
