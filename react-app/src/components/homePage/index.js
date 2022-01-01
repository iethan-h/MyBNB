/* eslint-disable no-unused-vars */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import LogoutButton from '../auth/LogoutButton'
import Search from '../search/searchForm'
import NewHostForm from '../newHost/newHostForm'
import { Modal } from '../../context/Modal';
import {NavLink} from 'react-router-dom'
import './homepage.css'


const Home = () =>{
    const [showModal, setShowModal] = useState(false);
    const userId=useSelector((state)=>state?.session?.user?.id)
    // const [showMenu, setShowMenu] = useState(false);
    
    // const closeMenu = () => {
    //     setShowMenu(false);
    //   };
      
    // const openMenu = () => {
    //     if (showMenu) return;
    //     setShowMenu(true);
    // };
    return(
        <> 
        <div className='logged_in_nav'>
            <div>
                <NavLink className='browse' to='/locations'>Browse</NavLink>
            </div>
            
            <div> 
                <LogoutButton />
            </div>
            <div>
            <button onClick={() => setShowModal(true)}>Be a host</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <NewHostForm  setShowModal={setShowModal}/>
                </Modal>
            )}
            </div>
        </div>


        <div className='homeBody'>
            <h1 className='greeter'>Find your next adventure with Mybnb!</h1>
        </div>
{/*         
        <div>
            <NavLink to={`/locations/${userId}`}>My Locations</NavLink>
        </div>
        
        <div>
            <NavLink to={`/bookings/${userId}`}>My Bookings</NavLink>
        </div> */}
        
        </>
    )
}

export default Home