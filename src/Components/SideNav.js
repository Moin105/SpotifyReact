import React from 'react';
import Logo from '../assets/images/logo.png';
import '../Styles/SideNav.css';
import { RiHome2Fill, RiHome2Line } from 'react-icons/ri';
import { IoSearchOutline } from 'react-icons/io5';
import { BiLibrary } from 'react-icons/bi';
import {AiFillPlusSquare} from 'react-icons/ai';
import {BiHeartSquare} from 'react-icons/bi';


function SideNav() {
    return (
        <div className="side-nav">
            <div className="header-logo">
                <img src={Logo}  alt='logo'/>
            </div>
            <ul>
                <li>
                    <a>
                        <RiHome2Line />
                        <RiHome2Fill/>
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a>
                        <IoSearchOutline />
                        <span>Search</span>
                    </a>
                </li>
                <li>
                    <a>
                        <BiLibrary />
                        <span>Your Library</span>
                    </a>
                </li>
            </ul>
            <div>
                <ul>
                    <li>
                        <button>
                            <AiFillPlusSquare/>
                            <span>Create Playlist</span>
                        </button>
                    </li>
                    <li>
                    <button>
                            <BiHeartSquare/>
                            <span>Liked Songs</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideNav
