
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';

const NavBar = () => {
  return (
    <div className='nav'>
      <ul className='nav_options'>
        <li>
          <a className='options' href='/' exact={true} activeClassName='active'>
            Home
          </a>
        </li>
        <li>
          <a className='options' href='/login' exact={true} activeClassName='active'>
            Login
          </a>
        </li>
        <li>
          <a className='options' href='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
