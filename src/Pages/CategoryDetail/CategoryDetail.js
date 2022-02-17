import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Playlist from "../../store/playlist";

function CategoryDetail() {
  const params = useParams();
  const playlist = useContext(Playlist);
  useEffect(() => {
    console.log("SSSSSSSSSSSSS", playlist);
  });

  return <div>{params.category}</div>;
}

export default CategoryDetail;
