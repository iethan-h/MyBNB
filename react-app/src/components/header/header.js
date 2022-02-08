import React from 'react';
import {  NavLink } from 'react-router-dom';
import SearchBar from './searchBar';
import LogoutButton from '../auth/LogoutButton'

const Header = () => {

  return (
    <>
    <header>
      <div className='logged_in_nav'>
            <div>
                <NavLink className='browse' to='/home'>Home</NavLink>
            </div>
            <SearchBar />
            <div> 
                <LogoutButton />
            </div>
        
        </div>
    </header>
    </>
  );
}

export default Header;
