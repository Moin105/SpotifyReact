import React from "react";
import Logo from "../assets/images/logo.png";
import "../Styles/SideNav.css";
import { RiHome2Line } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { BiLibrary } from "react-icons/bi";
import { AiFillPlusSquare } from "react-icons/ai";
import { BiHeartSquare } from "react-icons/bi";
import SideBarOption from "./SideNav/SideBarOption";
import { Link, NavLink } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-js";

// import { useDataLayerValue } from '../DataLayer';
// import SpotifyWebApi from 'spotify-web-api-js';
// import {getTokenFromResponse} from '../Components/spotify';

function SideNav(props) {
  const spotify = new SpotifyWebApi();

  const toTracks = (a) => {
    spotify.getPlaylistTracks(a).then((tracks) => {
      console.log("#############", tracks);
    });
  };

  return (
    <div className="side-nav">
      <div className="header-logo">
        <img src={Logo} alt="logo" />
      </div>
      <ul>
        <NavLink to="/" activeClassName="active">
          {" "}
          <SideBarOption
            // activeClassName="active"
            Icon={RiHome2Line}
            title={"Home"}
          />
        </NavLink>

        <NavLink to="/categories">
          {" "}
          <SideBarOption Icon={IoSearchOutline} title={"Search"} />
        </NavLink>
        <SideBarOption Icon={BiLibrary} title={"Your Library"} />
        {/* <p>{Icon}</p> */}
      </ul>
      <SideBarOption Icon={AiFillPlusSquare} title={"Create Playlist"} />
      <SideBarOption Icon={BiHeartSquare} title={"Liked Songs"} />
      <div className="line"></div>
      <div className="playlist"></div>
      {props.playlists?.items?.map((playlist) => (
        <SideBarOption
          onClick={toTracks(playlist.id)}
          title={playlist.name}
          key={playlist.name}
        />
      ))}
    </div>
  );
}

export default SideNav;

{
  /* <ul>
<li>
    <a>
        <RiHome2Line />
        <RiHome2Fill/>
        <span>Home</span>
    </a>
</li>
<li>
    <a>
        <IoSearchOutline />
        <span>Search</span>
    </a>
</li>
<li>
    <a>
        <BiLibrary />
        <span>Your Library</span>
    </a>
</li>
</ul> 
     <div>
                <ul>
                    <li>
                        <button>
                            <AiFillPlusSquare/>
                            <span>Create Playlist</span>
                        </button>
                    </li>
                    <li>
                    <button>
                            <BiHeartSquare/>
                            <span>Liked Songs</span>
                        </button>
                    </li>
                </ul>
            </div>
*/
}
