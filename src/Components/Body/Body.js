import React, { useState, useEffect } from "react";
import MyCard from "../myCard/MyCard";
import "./styles/styles.css";
import AlbumCard from "../AlbumCard/AlbumCard.js";

function Body(props) {
  //   const [playlist, setPlaylist] = useState([]);
  //
  //   useEffect(() => {
  //     console

  //     return () => {
  //       second;
  //     };
  //   }, [third]);
  const getConsole = () => {
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@", props?.album?.artists[0]);
  };

  return (
    <div className="gradient">
      <h2>Good Evening</h2>
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
      <h2>Made For {props?.user?.display_name}</h2>
      <div className="section-2">
        {props?.album?.artists.map((album) => {
          return (
            <AlbumCard
              image={album.images[2].url}
              name={album.name}
              genre={album.genres}
            ></AlbumCard>
          );
        })}
      </div>
      <button onClick={getConsole()}></button>
    </div>
  );
}

export default Body;
