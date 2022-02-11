import React, { useState, useEffect } from "react";
import MyCard from "../myCard/MyCard";
import "./styles/styles.css";

function Body(props) {
  //   const [playlist, setPlaylist] = useState([]);
  //
  //   useEffect(() => {
  //     console

  //     return () => {
  //       second;
  //     };
  //   }, [third]);

  return (
    <div className="gradient">
      <h1>Good Evening</h1>
      <div className="section-1">
        {props?.playlists?.items.map((playlist) => {
          return (
            <MyCard
              title={playlist.name}
              images={playlist.images[0].url}
              key={playlist.id}
            ></MyCard>
          );
        })}
      </div>
    </div>
  );
}

export default Body;
