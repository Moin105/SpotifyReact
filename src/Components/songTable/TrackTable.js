import React, { useEffect } from "react";
import { useDataLayerValue } from "../../store/DataLayer";
import { SpotifyWebApi } from "spotify-web-api-js";
import "./styles/styles.css";
import { useParams } from "react-router-dom";
import SongRow from "../SongRow/SongRow";

function TrackTable() {
  const [
    { tracks, playlists, image, description, playlistName, listType },
    dispatch,
  ] = useDataLayerValue();
  const params = useParams();
  useEffect(() => {
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", tracks?.items);
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", image);
  });
  var i = 0;

  return (
    <div>
      <div className="banner">
        <figure>
          <img src={image} />
        </figure>
        <div className="playlist-info">
          <p>{listType}</p>
          <h2>{playlistName}</h2>
          <span>{description}</span>
          <div className="info">
            <p></p>{" "}
          </div>
        </div>
      </div>

      <div className="table">
        <div>#</div>
        <div className="title">TITLE</div>
        <div className="album">ALBUM</div>
        <div className="date">DATE ADDED</div>
        <div>Time</div>
      </div>

      {tracks?.items?.map((tracks) => {
        return (
          <SongRow
            image={tracks?.track?.album?.images[0].url}
            name={tracks?.track.album?.name}
            artist={tracks?.track?.artists
              .map((artist) => artist.name)
              .join(", ")}
          />
        );
      })}
    </div>
  );
}

export default TrackTable;
