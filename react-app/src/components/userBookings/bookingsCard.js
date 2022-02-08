import LocationCard from '../locations/locationCard'
import { NavLink } from 'react-router-dom';
import {deleteBooking, editBooking} from '../../store/booking'
import { useState, useEffect } from 'react'
import { useDispatch} from "react-redux";
import { Modal } from '../../context/Modal';
import EditBooking from './editBooking'


const BookingCard = ({booking,user}) =>{
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const handleDeleteBooking = async (e) =>{
        e.preventDefault()
        dispatch(deleteBooking(booking?.id))
    }
    return(
        <>
            {/* <NavLink to={`/locations/${booking.locations?.id}`} className="one_location_li"> */}
                <div className='one_location' >
                        <div className="locationImage">
                            <img className="locationImg" src={booking.locations?.image} alt=""/>
                        </div>
                        <div className="locationCountry">
                            <p className="one_location_li">Start date: {booking.start}</p>
                        </div>
                        <div className="locationCountry">
                            <p className="one_location_li">End date: {booking.end}</p>
                        </div>
                        <div>
                        <button onClick={() => setShowModal(true)}>Change date</button>
                                {showModal && (
                                    <Modal onClose={() => setShowModal(false)}>
                                        <EditBooking  setShowModal={setShowModal}  booking={booking}/>
                                    </Modal>
                                )}
                                
                            <button onClick={handleDeleteBooking}>Cancel booking</button>
                        </div>
                </div>
                
            {/* </NavLink> */}
        </>
        
    )
}
export default BookingCard