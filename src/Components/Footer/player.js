import React from "react";
import {
  BsPlayCircleFill,
  BsFillSkipEndFill,
  BsFillSkipStartFill,
} from "react-icons/bs";
import { BiShuffle } from "react-icons/bi";
import { IoIosRepeat } from "react-icons/io";
import SpotifyPlayer from "react-spotify-web-playback/lib";
import { useDataLayerValue } from "../../store/DataLayer";

function Player() {
  const [{ token }, dispatch] = useDataLayerValue();
  return (
    <div className="player">
      {/* <SpotifyPlayer
        token={token}
        showSaveIcon
        // uris={trackUri ? [trackUri] : []}
      /> */}
      <div className="upper">
        <button>
          <BiShuffle />
        </button>
        <button>
          <BsFillSkipStartFill />
        </button>
        <button className="play">
          <BsPlayCircleFill />
        </button>
        <button>
          <BsFillSkipEndFill />
        </button>
        <button>
          <IoIosRepeat />
        </button>
      </div>
      <div className="playing-line"></div>
    </div>
  );
}

export default Player;
