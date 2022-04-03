import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='h-20 text-2xl flex items-center justify-center font-semibold bg-gradient-to-r from-blue-700 to-gray-300'>
                <NavLink className={({ isActive }) => isActive ? 'active' : 'inactive'} to='/'>HOME</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active' : 'inactive'} to='/review'>REVIEW</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active' : 'inactive'} to='/dashboard'>DASHBOARD</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active' : 'inactive'} to='/blogs'>BLOGS</NavLink>
            </nav>
        </div>
    );
};

export default Header;