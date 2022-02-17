import React, { useEffect } from "react";
import Navigators from "../../Components/Header/Navigators";
import { Router } from "react-router-dom";
// import SearchBar from '../../Components/Header/SearchBar';
import UserDropDown from "../../Components/Header/UserDropDown";
import SideNav from "../../Components/SideNav";
import NavBar from "../../Components/Header/NavBar";
import "./styles/styles.css";
import Body from "../../Components/Body/Body";
import Footer from "../../Components/Footer/footer";
import MyCard from "../../Components/myCard/MyCard";
import SearchBar from "../../Components/Header/SearchBar";
import AlbumCard from "../../Components/AlbumCard/AlbumCard";

function Home(props) {
  useEffect(() => {
    console.log("token >>>>>>", props);
  });
  const getConsole = () => {
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@", props?.albums?.artists[0]);
  };
  return (
    <div>
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
