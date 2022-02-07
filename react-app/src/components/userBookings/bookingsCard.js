import LocationCard from '../locations/locationCard'
import { NavLink } from 'react-router-dom';
import {deleteBooking, editBooking} from '../../store/booking'
import { useState, useEffect } from 'react'
import { useDispatch} from "react-redux";


const BookingCard = ({booking,user}) =>{
    const dispatch = useDispatch();
    const handleDeleteBooking = async (e) =>{
        e.preventDefault()
        dispatch(deleteBooking(booking?.id))
    }
    return(
        <>
            {/* <LocationCard location={booking.locations} /> */}
            <NavLink to={`/locations/${booking.locations?.id}`} className="one_location_li">
                <div className='one_location' >
                        <div className="locationImage">
                            <img className="locationImg" src={booking.locations?.image} alt=""/>
                        </div>
                        <div className="locationAddress">
                            <p className="one_location_li">{booking.locations?.address}</p>
                        </div>
                        <div className="locationCity">
                            <p className="one_location_li">{booking.locations?.city}</p>
                        </div>
                        <div className="locationState">
                            <p className="one_location_li">{booking.locations?.state}</p>
                        </div>
                        <div className="locationCountry">
                            <p className="one_location_li">{booking.locations?.country}</p>
                        </div>
                        <div>
                            <button>Change date</button>
                            <button onClick={handleDeleteBooking}>Cancel booking</button>
                        </div>
                </div>
                
            </NavLink>
        </>
        
    )
}
export default BookingCard