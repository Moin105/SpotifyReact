import React from 'react';
import './styles/styles.css';

function SideBarOption({ title, Icon }) {
    return (
        <div className='SideBarOption'>
            <a>
                {Icon && <Icon className="sidebar-icon"/>}
                <span>
                    {title}
                </span>
                
            </a>
        </div>
    )
}

export default SideBarOption
