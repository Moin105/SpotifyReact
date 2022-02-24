import React from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "../../store/DataLayer";
import "./styles/style.css";
import { Link } from "react-router-dom";
// import Playlist from "../../store/playlist";
const spotify = new SpotifyWebApi();

function SearchCategory(props) {
  //   const [categories, setCategories] = useState([]);
  // var i = 0;

  // useEffect(() => {
  //   const id = props?.categories?.categories?.items;
  //   console.log("SSSSSSSSSSSS", id[1].id);
  //   console.log("qqqqqqqqqq", (id || []).length);
  //   for (i = 0; i <= id; i++) {
  //     console.log("SSSSSSSSSSSSSS", id[i].id);
  //     spotify.getCategoryPlaylists(id[i].id).then((categoryCard) => {
  //       console.log("ssssssssssssssssss", categoryCard);
  //       setPlaylists(categoryCard);
  //     });
  //   }
  // }, [i]);
  const [{ playlists }, dispatch] = useDataLayerValue();

  // const [playlist, setPlaylist] = useState(null);
  // const [playlistId, setPlaylistId] = useState("");

  function GetCategory(a) {
    spotify.getCategoryPlaylists(a).then((playlists) => {
      dispatch({
        type: "SET_CATEGORY_PLAYLIST",
        playlists: playlists,
      });
      console.log("@@@@@@@@", playlists);
    });
  }
  return (
    // <Playlist.Provider value={{ categoryPlaylist: "" }}>
    <div className="categories">
      {props?.categories?.categories?.items.map((category) => {
        return (
          <div
            className="categoty_card"
            onClick={() => {
              // setCategoryPlaylist(category.id);
              GetCategory(category.id);
              console.log("ssss", category.id);
            }}
            key={category.id}
          >
            <p className="category_name" onClick={() => {}}>
              {category.name}
            </p>
            <Link to={`/categories/` + category.name}>
              {" "}
              <img
                className="category_img"
                alt={category.name}
                src={category.icons[0].url}
              />
            </Link>
          </div>
        );
      })}
    </div>
    // </Playlist.Provider>
  );
}

export default SearchCategory;
