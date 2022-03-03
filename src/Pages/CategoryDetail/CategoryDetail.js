import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDataLayerValue } from "../../store/DataLayer";
import AlbumCard from "../../Components/AlbumCard/AlbumCard";
import SpotifyWebApi from "spotify-web-api-js";
import "./style/styles.css";
import { Link } from "react-router-dom";
import { PlaylistPlay } from "@mui/icons-material";
function CategoryDetail() {
  const params = useParams();
  // const playlist = useContext(Playlist);
  const spotify = new SpotifyWebApi();
  const [
    { playlists, tracks, image, description, likes, songs, singers, listType },
    dispatch,
  ] = useDataLayerValue();

  useEffect(() => {
    console.log("!!!!!!!!!!!", playlists);
    // console.log("SSSSSSSSSSSS", image);
    // setTimeout(() => {}, timeout);
  });
  function GetTracks(a) {
    spotify.getPlaylistTracks(a).then((tracks) => {
      dispatch({
        type: "SET_TRACKS",
        tracks: tracks,
      });

      console.log("@@@@@@@@", tracks);
    });
  }
  return (
    <div className="category-detail">
      {/* {params.category} */}
      <h2>{params.category}</h2>
      <div className="category-row">
        {playlists?.playlists?.items?.map((playlist) => {
          return (
            <Link to={`/playlist/` + playlist.name}>
              <div
                onClick={() => {
                  GetTracks(playlist.id);
                  dispatch({
                    type: "SET_BANNER",
                    image: playlist.images[0].url,
                    description: playlist.description,
                    playlistName: playlist.name,
                    listType: playlist.type,
                  });
                  console.log("!!!!!!!!!!!!!!!!!");
                }}
              >
                <AlbumCard
                  image={playlist.images[0].url}
                  name={playlist.name}
                  genre={""}
                  key={playlist.name}
                />
              </div>
            </Link>

            // {" "}
            // {/* {playlist.name}   */}
            // {/* <img src={playlist.images[0].url} /> */}
          );
        })}
      </div>
    </div>
  );
}

export default CategoryDetail;
