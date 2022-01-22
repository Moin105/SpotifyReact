import React, { useEffect, useState } from "react";
import "./styles/styles.css";
import { IoSearchOutline } from "react-icons/io5";
import SpotifyWebApi from "spotify-web-api-js";
import SearchSong from "../../Pages/SearchSong";
// import { Title } from "@mui/icons-material";

function SearchBar() {
  const [searchResult, setSearchResult] = useState([]);
  const [search, setSearch] = useState("");
  const spotify = new SpotifyWebApi();

  useEffect(() => {
    console.log("ease", search);
    if (!search) return setSearchResult([]);
    // if (!accessToken) return;

    let cancel = false;
    spotify.searchTracks(search).then((tracks) => {
      // if (cancel) return;
      setSearchResult(
        tracks.tracks.items.map((tracks) => {
          const smallestAlbumImage = tracks.album.images.reduce(
            (smallest, image) => {
              if (image.height < smallest.height) return image;
              return smallest;
            },
            tracks.album.images[0]
          );

          return {
            artist: tracks.artists[0].name,
            title: tracks.name,
            uri: tracks.uri,
            albumUrl: smallestAlbumImage.url,
          };
        })
      );
      // s
      // if (!res.body.tracks) {
      console.log("^^^^^^^^^^^", tracks.tracks.items);
      //   return "hold a minute";
      // }
      // );
    });

    return () => (cancel = true);
  }, [search]);

  const SearchHandler = (e) => {
    setSearch(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setSearch("");
  };
  return (
    <div>
      <form onSubmit={submitHandler} className="search-bar">
        <label>
          <IoSearchOutline />
        </label>
        <input
          type="text"
          placeholder="Artists,songs or podcasts"
          value={search}
          onChange={SearchHandler}
        />
      </form>
      {/* {searchResult} */}
      <SearchSong tracks={searchResult} />
      {/* {searchResult.map((track) => (
        <SearchSong track={track} key={track.uri} />
      ))} */}
    </div>
  );
}

export default SearchBar;
