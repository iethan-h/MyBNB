import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import {NavLink} from 'react-router-dom'
import LogoutButton from '../auth/LogoutButton'
import LocationCard from '../locations/locationCard'
import { useEffect, useState } from 'react';
import BookingsContainer from './bookingsContainer'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const BookingPage = ({locationId}) =>{
    const user = useSelector((state) => state.session?.user)
   
    const locationOne = useSelector(state => state.location)
    const location = locationOne[locationId]

    
    
    
    const bookings = useSelector(state => state?.booking)
    let bookingCards;
    if(bookings){
        bookingCards = Object.values(bookings).map((booking,idx) =>{
            if(booking?.location?.id?.includes(user?.id)){
                return <LocationCard key={location?.id} locationId={location.id}/>
            }
            return bookingCards
        })
        .reverse().slice()
    }
    
    return(
        <>
        <div className='logged_in_nav'>
            <NavLink className='loggedInNav' to='/home'>Home</NavLink>
            <NavLink className='loggedInNav' to='/locations'>Browse</NavLink>
            <LogoutButton/>
        </div>
        <div className = "bookings_body">
            <BookingsContainer location={location}/>
        </div>
        </>
    )
}

export default BookingPage