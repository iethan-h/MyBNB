/* eslint-disable no-unused-vars */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import LogoutButton from '../auth/LogoutButton'
import Search from '../search/searchForm'
import NewHostForm from '../newHost/newHostForm'
import { Modal } from '../../context/Modal';
import {NavLink} from 'react-router-dom'


const Home = () =>{
    const [showModal, setShowModal] = useState(false);
    
    const [showMenu, setShowMenu] = useState(false);
    
    const closeMenu = () => {
        setShowMenu(false);
      };
      
    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };
    return(
        <> 
        <div> 
            <LogoutButton />
        </div>
        <div>
        <button onClick={showMenu === false ? openMenu : closeMenu}>Be a Host</button>
        {showMenu && (    
            <NewHostForm/>         
          )}
        </div>
        <div>
            <NavLink to='/locations'>Browse</NavLink>
        </div>
        <div>
            <Search/>
        </div>
        <div className='homeBody'>
            <h1 className='greeter'>Find your next adventure with Mybnb!</h1>
        </div>
        
        </>
    )
}

export default Home