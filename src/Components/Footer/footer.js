import React from 'react';
import Player from './player';
import SongCard from './songCard';
import './styles/styles.css';
import Volume from './volume';


function Footer() {
    return (
        <div className='footer'>
            <SongCard/>
            <Player/>
            <Volume/>
        </div>
    )
}

export default Footer
