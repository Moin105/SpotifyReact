import React, { useEffect } from "react";
import { useDataLayerValue } from "../../store/DataLayer";
import { SpotifyWebApi } from "spotify-web-api-js";

function songsTable() {
  const [{ tracks }, dispatch] = useDataLayerValue;
  useEffect(() => {
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", tracks);
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>TITLE</th>
            <th>ALBUM</th>
            <th>DATE ADDED</th>
            <th>TT</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default songsTable;
