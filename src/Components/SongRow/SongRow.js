import React, { useEffect } from "react";
import "./styles/styles.css";

function SongRow({ name, artist, image }) {
  useEffect(() => {
    console.log("WWWWWWWWWWWWWWWWWWWWWWWWW");
  });

  return (
    <div className="songRow">
      <img className="songRow__album" src={image} alt="" />
      <div className="songRow__info">
        <h1>{name}</h1>
        <p>
          {artist} {/* {tracks?.track.album?.name} */}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
