import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import { getTokenFromResponse } from "./Components/spotify";
import Login from "./Pages/Login/Login";
import SpotifyWebApi from "spotify-web-api-js";
import SearchCategory from "./Pages/Search/SearchCategory";
// import { useDataLayerValue } from './DataLayer'

function App() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [playlist, setPlaylist] = useState(null);
  const [album, setAlbum] = useState(null);
  const [categories, setCategories] = useState([]);

  // const spotify = new SpotifyWebApi();
  // const [search, setSearch] = useState(null);

  useEffect(() => {
    const spotify = new SpotifyWebApi();

    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      //  console.log(">>>>>>>>>>>>>>>>", token);
      console.log("ttttttt>>>>>>", spotify);

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        setUser(user);
        console.log(">>>>>>>>>>>>>>>>", user);
      });
      spotify.getUserPlaylists().then((playlists) => {
        setPlaylist(playlists);
        console.log("444444444444", playlists);
      });
      spotify.getArtistAlbums("43ZHCT0cAZBISjO8DG9PnE", function (err, data) {
        if (err) console.error("wwwwwwwwww", err);
        else console.log("Artist albums", data);
      });
      spotify.getFeaturedPlaylists().then((featuredPlaylist) => {
        // console.log("33333####", featuredPlaylist);
      });
      spotify.getCategories().then((allCategories) => {
        // console.log("%%%%%%%", allCategories);
        setCategories(allCategories);
      });
      spotify
        .getArtists([
          "2hazSY4Ef3aB9ATXW7F5w3",
          "6J6yx1t3nwIDyPXk5xa7O8",
          "43ZHCT0cAZBISjO8DG9PnE",
          "26VFTg2z8YR0cCuwLzESi2",
          "6LEG9Ld1aLImEFEVHdWNSB",
          "74OaRjmyh0XyRZsQQQ5l7c",
        ])
        .then(
          function (data) {
            console.log("Artists information", data);
          },
          function (err) {
            console.error(err);
          }
        );
    }

    // console.log(")))))))))))", spotify)
    // spotify.getTracks().then((tracks)=>{
    //    setTracks(tracks)
    // })
  }, []);

  return (
    <div className="App">
      {token ? (
        <div>
          <SearchCategory categories={categories} />
          {/* <Home token={token} user={user} playlists={playlist} /> */}
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
