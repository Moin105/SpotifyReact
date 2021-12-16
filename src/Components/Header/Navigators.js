import React from 'react'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import './styles/styles.css'



function Navigators() {
    return (
        <div className='navigators'>
            <button>
                <IoIosArrowBack />
            </button>

            <button>
                <IoIosArrowForward />
            </button>
        </div>
    )
}

export default Navigators
