/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import LogoutButton from '../auth/LogoutButton'
import NewHostForm from '../newHost/newHostForm'
import { Modal } from '../../context/Modal';
import {NavLink} from 'react-router-dom'
import {useSelector} from 'react-redux'
import './homepage.css'



const Home = () =>{
    const [showModal, setShowModal] = useState(false);
    const userId = useSelector((state) => state.session?.user?.id)
    // const userId=useSelector((state)=>state?.session?.user?.id)
    
    return(
        <> 
        <div className='logged_in_nav'>
            <div>
                <NavLink className='browse' to='/locations'>Browse</NavLink>
            </div>
            
            <div>
            <button onClick={() => setShowModal(true)}>Be a host</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <NewHostForm  setShowModal={setShowModal}/>
                </Modal>
            )}
            </div>
            
            <div> 
                <LogoutButton />
            </div>
            
        </div>
        <div className='homeBody'>
            <h1 className='greeter'>Find your next adventure with Mybnb!</h1>
        </div>
        
        <div className="homeImage">
            <div className="home_img_1">
                <img className='home_img1' src="https://www.lonestartravelguide.com/wp-content/uploads/2020/09/shutterstock_786767038-1024x681.jpg" alt=""/> 
                {/* <NavLink className='centered' to={`/bookings/${userId}`}>TEST</NavLink> */}
            </div>
            <div className="home_img_2">
                <img className='home_img2' src='https://i.guim.co.uk/img/media/e257becfec477105123f06f96db4529966b4035c/0_391_6048_3628/master/6048.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=6a3a587e64662d409ef25b3215fb5ac0' alt=""/>
            </div>
        </div>
        </>
    )
}

export default Home