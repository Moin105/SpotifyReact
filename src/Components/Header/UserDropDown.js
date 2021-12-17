import React, { useState } from 'react';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
import './styles/styles.css'

function UserDropDown() {
    const [show, setshow] = useState(false);

    const showDropDown = () => {
        setshow(!show)
    }




    return (
        <div>
            <div className='bar' onClick={showDropDown}>
                <div className='user-profile' >
                </div>
                <div className='user-name'>
                    <p>Moin Latif</p>
                </div>
                <div className='icons'>
                    {show ? <MdArrowDropUp /> : <MdArrowDropDown />}
                </div>

            </div>
            {show ? <div className='show-box'>
                <ul>
                    <a>Account </a>
                    <a>Profile</a>
                    <a>Log out</a>
                </ul>
            </div> : ''}
        </div>
    )
}

export default UserDropDown
