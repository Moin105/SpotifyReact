import React, { useState, useEffect } from "react";

function SearchSong({ tracks }) {
  return (
    <div>
      {/* <div>{track.title}</div> */}
      <button
        style={{ height: "64px", width: "64px" }}
        onClick={() => {
          console.log(tracks);
        }}
      ></button>
      <div>
        {tracks.map((tracks) => {
          return <div> {tracks.title}</div>;
        })}
      </div>
      {/* {tracks.map((tracks) => {
        tracks.title;
      })} */}
      {/* <div>{tracks.name}</div> */}
      {/* <img src={tracks.albumUrl} style={{ height: "64px", width: "64px" }} /> */}
    </div>
  );
}

export default SearchSong;
