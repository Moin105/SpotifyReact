import React from 'react';
import Navigators from '../../Components/Header/Navigators';
// import SearchBar from '../../Components/Header/SearchBar';
import UserDropDown from '../../Components/Header/UserDropDown';
import SideNav from '../../Components/SideNav';
import NavBar from '../../Components/Header/NavBar'
import './styles/styles.css'


function Home() {
    return (
        <div>
            <div className='header'>
                <div className='header-row'> 
                      <Navigators/>
                      {/* <SearchBar/> */}
                      <NavBar/>

                </div>
                <UserDropDown/>
            </div>
           <SideNav/> 
        </div>
    )
}

export default Home
