// https://developer.spotify.com/
// documentation/web-playback-sdk/quick-start/#

export const authEndKey = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";
const clientId = "29bfd7ff859d48eb8fa785f8657abcac";
const scopes = [
  "user-read-email",
  "streaming",
  "user-modify-playback-state",
  "user-read-playback-state",
  "user-read-currently-playing",
  // "user-read-recently-played",
  // "user-top-read",
  "user-read-private",
  "user-library-read",
  "user-library-modify",
];

export const getTokenFromResponse = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const loginUrl = `${authEndKey}?client_id=${clientId}&redirect_uri=${redirectUri}&scoppe=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
// export const albumKey = "https://accounts.spotify.com/v"
