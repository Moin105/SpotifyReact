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
import SearchBar from "../../Components/Header/SearchBar";

function Home(props) {
  useEffect(() => {
    console.log("token >>>>>>", props);
  });
  return (
    <div>
      <div className="header">
        <div className="wrapper">
          <div className="header-row">
            <Navigators />
            {/* <SearchBar /> */}
            {/* <NavBar/> */}
          </div>
          <UserDropDown user={props.user} />
        </div>
      </div>
      <SideNav token={props.token} playlists={props.playlists} />
      <Body playlists={props.playlists}></Body>

      <Footer />
    </div>
  );
}

export default Home;
