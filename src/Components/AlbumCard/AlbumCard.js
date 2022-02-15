import React from "react";
import "./style/style.css";
function AlbumCard(props) {
  return (
    <div className="album-card">
      <figure>
        <img src={props?.image} />
      </figure>
      <h3>{props?.name}</h3>
      <p className="genre">{props.genre[0]}</p>
    </div>
  );
}

export default AlbumCard;
