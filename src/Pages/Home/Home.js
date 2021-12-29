import React from 'react';
import Navigators from '../../Components/Header/Navigators';
// import SearchBar from '../../Components/Header/SearchBar';
import UserDropDown from '../../Components/Header/UserDropDown';
import SideNav from '../../Components/SideNav';
import NavBar from '../../Components/Header/NavBar';
import './styles/styles.css'
import Body from '../../Components/Body/Body';


function Home() {
    return (
        <div>
            <div className='header'>
                <div className='wrapper'>
                    <div className='header-row'>
                        <Navigators />
                        {/* <SearchBar/> */}
                        {/* <NavBar/> */}
                    </div>
                    <UserDropDown />
                </div>

            </div>
            <SideNav />
            <Body>
            </Body>
        </div>

    )
}

export default Home
