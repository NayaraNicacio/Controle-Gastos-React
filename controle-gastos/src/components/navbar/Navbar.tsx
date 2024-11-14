import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledNavbar } from './Styles';

const NavBar = ()=> {
    return (
        <StyledNavbar>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/criar-depesas'>Criar Despesas</NavLink>
            <NavLink to='/dashboard'>Dashboard</NavLink>
        </StyledNavbar>
    )
}

export default NavBar