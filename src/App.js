import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import { getTokenFromResponse } from './Components/spotify'
import Login from './Pages/Login/Login';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './DataLayer'



function App() {
  const [token, setToken] = useState(null);
  const [user,setUser] = useState(null);
  const [playlist,setPlaylist] = useState(null);
  const spotify = new SpotifyWebApi()
  const [tracks,setTracks] = useState(null);

  useEffect(() => {

    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      
      setToken(_token)
    //  console.log(">>>>>>>>>>>>>>>>", token);
      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
      setUser(user)
         console.log(">>>>>>>>>>>>>>>>", user);
      })
      spotify.getUserPlaylists().then((playlists) => {
      setPlaylist(playlists)
      console.log("444444444444",playlists)
      })
    }
    // console.log(")))))))))))", spotify)
    // spotify.getTracks().then((tracks)=>{
    //    setTracks(tracks)
    // })
  }, []);

  return (
    <div className="App">
      {token ? (<Home token={token} user={user}  playlists={playlist} />) : (<Login />)}
    </div>
  );
}

export default App;
