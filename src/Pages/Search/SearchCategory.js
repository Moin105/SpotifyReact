import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import "./styles/style.css";

function SearchCategory(props) {
  const spotify = SpotifyWebApi();
  //   const [categories, setCategories] = useState([]);

  useEffect(() => {
    console.log(
      "pppppppppp",
      props?.categories?.categories?.items[0].icons[0].url
    );
  });

  return (
    <div className="categories">
      {props?.categories?.categories?.items.map((category) => {
        return (
          <div className="categoty_card" key={category.id}>
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
