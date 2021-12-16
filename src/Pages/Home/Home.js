import React from 'react';
import Navigators from '../../Components/Header/Navigators';
import UserDropDown from '../../Components/Header/UserDropDown';
import SideNav from '../../Components/SideNav';
import './styles/styles.css'


function Home() {
    return (
        <div>
            <div className='header'>
                <Navigators/>
                <UserDropDown/>
            </div>
           <SideNav/> 
        </div>
    )
}

export default Home
