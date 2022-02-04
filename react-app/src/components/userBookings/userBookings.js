import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import {NavLink} from 'react-router-dom'
import LogoutButton from '../auth/LogoutButton'
import LocationCard from '../locations/locationCard'
import { useEffect, useState } from 'react';
import BookingsContainer from './bookingsContainer'
import {userWalks} from '../../store/booking'

const BookingPage = () =>{
    const dispatch = useDispatch();
    const user = useSelector((state) => state.session?.user)
    const myBookings = useSelector(state => Object.values(state.booking))
    console.log('---------------',typeof myBookings)
    
    useEffect(()=>{
        dispatch(userWalks(user?.id))
    },[dispatch,user])

    
    return(
        <>
        <div className='logged_in_nav'>
            <NavLink className='loggedInNav' to='/home'>Home</NavLink>
            <NavLink className='loggedInNav' to='/locations'>Browse</NavLink>
            <LogoutButton/>
        </div>
        <div className = "bookings_body">
            <BookingsContainer/>
        </div>
        </>
    )
}

export default BookingPage