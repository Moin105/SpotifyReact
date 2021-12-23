import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import { getTokenFromResponse } from './Components/spotify'
import Login from './Pages/Login/Login';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './DataLayer'



function App() {
  // const [token, setToken] = useState(null)
  const [{ user, token }, dispatch] = useDataLayerValue();
  const spotify = new SpotifyWebApi()

  useEffect(() => {

    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
     dispatch({
       type:"SET_TOKEN",
       token: _token
     })
     console.log(">>>>>>>>>>>>>>>>", token);


      spotify.setAccessToken(_token);
     
      spotify.getMe().then(user => {

        dispatch({
          type: 'SET_USER',
          user: user,
        }); 
         console.log(">>>>>>>>>>>>>>>>", user);
      })
    }

  }, []);

  return (
    <div className="App">

      {token ? (<Home />) : (<Login />)}
    </div>
  );
}

export default App;
