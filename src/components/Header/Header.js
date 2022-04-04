import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar className='h-20 text-2xl font-semibold bg-gradient-to-r from-gray-300 to-blue-700 '>
                <Container>
                    <Nav className="ms-auto">
                        <NavLink className={({ isActive }) => isActive ? 'active' : 'inactive'} to='/'>HOME</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'active' : 'inactive'} to='/review'>REVIEW</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'active' : 'inactive'} to='/dashboard'>DASHBOARD</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'active' : 'inactive'} to='/blogs'>BLOGS</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;