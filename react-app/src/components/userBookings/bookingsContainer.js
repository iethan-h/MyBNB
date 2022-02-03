import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import {NavLink} from 'react-router-dom'
import { useEffect, useState } from 'react';

const BookingsContainer = ({bookings,user}) =>{
    // const [upComing, setUpcoming] = useState([])
    // const [oldBooking, setOldBooking] = useState([])
    // useEffect(() => {
    // let pastBookings = [];
    // let upComingBookings = [];
    // let today = new Date()
    // for(let booking of bookings){
    //     let date = new Date(booking.date.slice(5,16))
    //     if(date < today){
    //         pastBookings.push(booking)
    //     }else{
    //         upComingBookings.push(booking)
    //     }
    //    }
    //    upComingBookings.sort(function(a,b) {
    //     return new Date(a.date) - new Date(b.date)
    //   })
    //   pastBookings.sort(function(a,b) {
    //     return new Date(a.date) - new Date(b.date)
    //   })
    //   setOldBooking(pastBookings)
    //   setUpcoming(upComingBookings)
    // },[bookings])
   return(
    <>
    <div>
        {bookings?.userId === user?.id &&(
            <p>test</p>
        )}
    </div>
    </>
    )
}

export default BookingsContainer