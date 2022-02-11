import React from "react";
import "./styles/styles.css";

function MyCard(props) {
  return (
    <div className="my-card">
      <figure>
        <img src={props.images} alt={props.id} />
      </figure>
      <div className="info-card">
        <h2>{props.title}</h2>
        {/* play icon */}
      </div>
    </div>
  );
}

export default MyCard;
