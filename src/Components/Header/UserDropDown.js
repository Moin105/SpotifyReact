import React, { useState } from 'react';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
import './styles/styles.css'

function UserDropDown(props) {
    const [show, setshow] = useState(false);

    const showDropDown = () => {
        setshow(!show)
    }




    return (
        <div>
            <div className='bar' onClick={showDropDown}>
                <div  >
                   <img className='user-profile' src={props?.user?.images[0].url }/>
                </div>
                <div className='user-name'>
                    <p>{props?.user?.display_name}</p>
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
