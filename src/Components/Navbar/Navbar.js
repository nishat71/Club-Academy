import React from 'react';
import './Navbar.css';
import {MdSportsScore} from 'react-icons/md'


const Navbar = () => {
    return (
        <div className='nav'>
            <h3 className='logo'><MdSportsScore className='logo-icon'/>Club Academy</h3>
        </div>
    );
};

export default Navbar;