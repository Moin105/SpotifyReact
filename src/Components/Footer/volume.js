import React from 'react';
import './styles/styles.css';
import {MdOutlineAudiotrack,MdOutlineQueueMusic} from 'react-icons/md';
import {FiVolume2} from 'react-icons/fi'; 
function Volume() {
    return (
        <div className='volume'>
            <MdOutlineAudiotrack />
            <MdOutlineQueueMusic/>
            <FiVolume2/>
            <div className='hr'></div>
        </div>
    )
}

export default Volume;


