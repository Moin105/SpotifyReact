import React, { useEffect, useState } from "react";
// import Navigators from "../../Components/Header/Navigators";
// import { Router } from "react-router-dom";
// // import SearchBar from '../../Components/Header/SearchBar';
// import UserDropDown from "../../Components/Header/UserDropDown";
// import SideNav from "../../Components/SideNav";
// import NavBar from "../../Components/Header/NavBar";
import "./styles/styles.css";
import { Link } from "react-router-dom";
// import Body from "../../Components/Body/Body";
// import Footer from "../../Components/Footer/footer";
import { useDataLayerValue } from "../../store/DataLayer";
import MyCard from "../../Components/myCard/MyCard";
// import SearchBar from "../../Components/Header/SearchBar";
import AlbumCard from "../../Components/AlbumCard/AlbumCard";
import SpotifyWebApi from "spotify-web-api-js";
function Home(props) {
  const spotify = new SpotifyWebApi();
  const [topList, setTopList] = useState([]);
  const [{ playlists }, dispatch] = useDataLayerValue();

  useEffect(() => {
    console.log("token >>>>>>", props);
    spotify.getCategoryPlaylists("toplists", function (err, data) {
      if (err) console.error("wwwwwwwwww", err);
      else {
        setTopList(data);
        console.log("Playlists", topList);
      }
    });
    // spotify.getCategoryPlaylists("toplists", function (err, data) {
    //   if (err) console.error("wwwwwwwwww", err);
    //   else {
    //     setTopList(data);
    //     console.log("Playlists", topList);
    //   }
    // });
  }, []);
  function GetTracks(a) {
    spotify.getPlaylistTracks(a).then((tracks) => {
      dispatch({
        type: "SET_TRACKS",
        tracks: tracks,
      });

      console.log("@@@@@@@@", tracks);
    });
  }

  // spotify
  //   .getCategoryPlaylists(
  //     props?.categories?.categories?.items[1].id
  //     // "toplists"
  //   )
  //   .then((toplists) => {
  //     setTopList(toplists);
  //     console.log("##############", toplists);
  //   });
  // const getConsole = () => {
  //   console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@", props?.albums?.artists[0]);
  // };
  return (
    <div className="wrap">
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
      </div>
      <h2>Made For {props?.user?.display_name}</h2>
      <div className="section-2">
        {props?.albums?.artists.map((album) => {
          return (
            <AlbumCard
              image={album.images[2].url}
              name={album.name}
              genre={album.genres}
            ></AlbumCard>
          );
        })}
      </div>
      <h2>Top Playlists</h2>
      <div className="section-2">
        {topList?.playlists?.items.slice(0, 5).map((toplist) => {
          return (
            <div
              key={toplist.name}
              onClick={() => {
                console.log("!!!!!!!!!!!!!!!!!", toplist);
                GetTracks(toplist.id);
                dispatch({
                  type: "SET_BANNER",
                  image: toplist.images[0].url,
                  description: toplist.description,
                  playlistName: toplist.name,
                  listType: toplist.type,
                });
              }}
            >
              <Link to={`/playlist/` + toplist.name}>
                <AlbumCard
                  image={toplist.images[0].url}
                  name={toplist.name}
                  genre={""}
                ></AlbumCard>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;

{
  /* <div className="header">
        <div className="wrapper">
          <div className="header-row">
            <Navigators />
            {/* <SearchBar /> */
}
{
  /* <NavBar/> */
}
{
  /* </div> */
}
{
  /* <UserDropDown user={props.user} /> */
}
{
  /* </div> */
}
{
  /* </div> */
}
{
  /* <SideNav token={props.token} playlists={props.playlists} /> */
}
{
  /* <Body
        user={props.user}
        playlists={props.playlists}
        album={props.albums}
      ></Body> */
}
{
  /* <Footer /> */
}
