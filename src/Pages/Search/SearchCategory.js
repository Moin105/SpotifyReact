import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import "./styles/style.css";
const spotify = new SpotifyWebApi();

function SearchCategory(props) {
  //   const [categories, setCategories] = useState([]);

  useEffect(() => {
    console.log(
      "pppppppppp",
      props?.categories?.categories?.items[0].icons[0].url
    );
  });
  const [playlists, setPlaylists] = useState([]);
  const [playlistId, setPlaylistId] = useState("");
  const GetCategory = (a) => {
    console.log(
      spotify.getCategoryPlaylists(a).then((categoryCard) => {
        console.log("ssssssssssssssssss", categoryCard);
        setPlaylists(categoryCard);
      })
    );
    // setPlaylists(categoryCard);
  };
  return (
    <div className="categories">
      {props?.categories?.categories?.items.map((category) => {
        return (
          <div
            className="categoty_card"
            onClick={() => {
              setPlaylistId(category.id);
              GetCategory(playlistId);
            }}
            key={category.id}
          >
            <p className="category_name">{category.name}</p>
            <img
              className="category_img"
              alt={category.name}
              src={category.icons[0].url}
            />
          </div>
        );
      })}
    </div>
  );
}

export default SearchCategory;
