import React from 'react';
import { BsPlayCircleFill, BsFillSkipEndFill, BsFillSkipStartFill } from 'react-icons/bs';
import { BiShuffle } from 'react-icons/bi';
import { IoIosRepeat } from 'react-icons/io'

function Player() {
  return (
    <div className='player'>
      <div className='upper'>
        <button>
          <BiShuffle />
        </button>
        <button>
          <BsFillSkipStartFill />
        </button>
        <button className='play'>
          <BsPlayCircleFill />
        </button>
        <button>
          <BsFillSkipEndFill />
        </button>
        <button>
          <IoIosRepeat />
        </button>
      </div>
      <div className='playing-line'>

      </div>
    </div>
  )
}

export default Player
