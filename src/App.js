import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import { getTokenFromResponse } from "./Components/spotify";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import SpotifyWebApi from "spotify-web-api-js";
import SearchCategory from "./Pages/Search/SearchCategory";
import { useDataLayerValue } from "./store/DataLayer";
import SideNav from "../src/Components/SideNav";
import Footer from "./Components/Footer/footer";
// import Home from "./Pages/Home/Home";
import Navigators from "./Components/Header/Navigators";
import SearchBar from "./Components/Header/SearchBar";
import UserDropDown from "./Components/Header/UserDropDown";
import CategoryDetail from "./Pages/CategoryDetail/CategoryDetail";
import TrackTable from "./Components/songTable/TrackTable";
import SearchResult from "./Pages/SearchResult/SearchResult";

function App() {
  // const DataLayer = useDataLayerValue();
  // const [token, setToken] = useState(null);
  const [{ user, token, tracks, search_result }, dispatch] =
    useDataLayerValue();
  const [userPlaylist, setUserPlaylist] = useState(null);
  const [album, setAlbum] = useState(null);
  const [categories, setCategories] = useState([]);
  const [categoryPlaylist, setCategoryPlaylist] = useState([]);

  // const spotify = new SpotifyWebApi();
  // const [search, setSearch] = useState(null);

  useEffect(() => {
    const spotify = new SpotifyWebApi();
    // console.log("######", DataLayer);
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      // setToken(_token);
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      // console.log(">>>>>>>>>>>>>>>>", token);
      console.log("ttttttt>>>>>>", spotify);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
        // setUser(user);
        // console.log(">>>>>>>>>>>>>>>>", user);
      });
      spotify.getUserPlaylists().then((playlists) => {
        setUserPlaylist(playlists);
        console.log("444444444444", playlists.items);
      });
      spotify.getArtistAlbums("43ZHCT0cAZBISjO8DG9PnE", function (err, data) {
        if (err) console.error("wwwwwwwwww", err);
        else console.log("Artist albums", data);
      });
      // spotify.getFeaturedPlaylists().then((featuredPlaylist) => {
      //   // console.log("33333####", featuredPlaylist);
      // });
      spotify.getCategories().then((allCategories) => {
        // console.log("%%%%%%%", allCategories);
        setCategories(allCategories);
      });
      spotify
        .getArtists([
          // "2hazSY4Ef3aB9ATXW7F5w3",
          "6J6yx1t3nwIDyPXk5xa7O8",
          "43ZHCT0cAZBISjO8DG9PnE",
          // "26VFTg2z8YR0cCuwLzESi2",
          "6LEG9Ld1aLImEFEVHdWNSB",
          "74OaRjmyh0XyRZsQQQ5l7c",
        ])
        .then(
          function (data) {
            setAlbum(data);
            console.log("Artists information", data);
          },
          function (err) {
            console.error(err);
          }
        );
      // spotify.getPlaylistTracks("11dFghVXANMlKmJXsNCbNl").then((Tracks) => {
      //   console.log("44444$$$$$", Tracks);
      // });
      // spotify.getMySavedTracks().then((tracks) => {
      //   console.log("#", tracks);
      // });
    }

    // console.log(")))))))))))", spotify)
    // spotify.getTracks().then((tracks)=>{
    //    setTracks(tracks)
    // })
    console.log("YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY", search_result);
  }, []);
  console.log(":a", token);
  return (
    // <Playlist.Provider
    //   value={{
    //     categoryPlaylist,
    //     // console.log("SSSS",playlist)
    //   }}
    // >
    <div className="App">
      {token ? (
        <div className="section">
          <div className="struct">
            <SideNav token={token} playlists={userPlaylist} />
            <div className="main">
              <header className="header">
                <div className="wrapper">
                  <div className="header-row">
                    <Navigators />
                    <SearchBar />
                    {/* <NavBar/> */}
                  </div>
                  <UserDropDown user={user} />
                </div>
              </header>
              <Routes>
                <Route
                  path="/"
                  element={
                    <Home
                      albums={album}
                      token={token}
                      user={user}
                      playlists={userPlaylist}
                      categories={categories}
                    />
                  }
                ></Route>
                <Route
                  path="/categories"
                  element={
                    <SearchResult
                      categories={categories}
                      setCategoryPlaylist={setCategoryPlaylist}
                    />
                  }
                ></Route>
                <Route
                  path="/categories/:category"
                  element={<CategoryDetail />}
                ></Route>
                <Route
                  path="/playlist/:playlist"
                  render={() => <TrackTable tracks={tracks} />}
                  element={<TrackTable />}
                ></Route>
              </Routes>
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        // <Routes>
        //   <Route
        //     path="/"
        //     element={
        //       <Home
        //         albums={album}
        //         token={token}
        //         user={user}
        //         playlists={playlist}
        //         categories={categories}
        //       />
        //     }
        //   ></Route>
        //   <Route
        //     path="/categories"
        //     element={<SearchCategory categories={categories} />}
        //   ></Route>
        // </Routes>
        <Login />
      )}
    </div>
    // </Playlist.Provider>
  );
}

export default App;
