import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import LogoutButton from '../auth/LogoutButton'
import Search from '../search/searchForm'
import NewHostForm from '../newHost/newHostForm'
import { Modal } from '../../context/Modal';

const Home = () =>{
    const [showModal, setShowModal] = useState(false);
    return(
        <> 
        <div> 
            <LogoutButton />
        </div>
        <div>
            <button onClick={() => setShowModal(true)}>
            Host a location
            </button>
            {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <NewHostForm />
            </Modal>
          )}
        </div>
        <div>
            <a href=' '>Browse</a>
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