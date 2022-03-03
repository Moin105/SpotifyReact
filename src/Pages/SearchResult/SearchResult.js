import React, { useEffect } from "react";
import { useDataLayerValue } from "../../store/DataLayer";
import SearchCategory from "../Search/SearchCategory";
import SongRow from "../../Components/SongRow/SongRow";

function SearchResult(props) {
  const [{ search_result }] = useDataLayerValue();
  useEffect(() => {
    console.log("YYYYYYYYYYYYYYYYYYYYYY", search_result);
  });

  return (
    <div>
      {search_result.length <= 0 ? (
        <SearchCategory
          categories={props.categories}
          setCategoryPlaylist={props.setCategoryPlaylist}
        />
      ) : (
        <div>
          {search_result?.tracks?.items?.map((tracks) => {
            return (
              <SongRow
                image={tracks?.album?.images[2].url}
                name={tracks?.name}
                artist={tracks?.artists.map((artist) => artist.name).join(", ")}
              />
            );
          })}{" "}
        </div>
      )}
    </div>
  );
}

export default SearchResult;
