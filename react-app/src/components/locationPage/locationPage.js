import { deleteLocation } from '../../store/location'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { getSingleLocation } from '../../store/location'
import { useParams } from 'react-router'
import { useHistory } from 'react-router-dom'


const LocationPage =({location}) =>{
    const { id } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.session?.user?.id)
    
    useEffect((id) => {
        dispatch(getSingleLocation(id))
    }, [dispatch])
    
    const handleDelete = async (e) => {
        e.preventDefault()

        dispatch(deleteLocation(location.id))
        history.push('/home')
    }
    return (
        <div>
            <h1>welcome to {location?.username}'s location</h1>
            <div className={'one_location'}>
                <ul className="one_location_details">
                    <li className="one_location_li">{location?.address}</li>
                    <li className="one_location_li">{location?.city}</li>
                    <li className="one_location_li">{location?.state}</li>
                    <li className="one_location_li">{location?.country}</li>
                    <li className="one_location_li">${location?.price} per night</li>
                </ul>
            </div>
            {location?.userId === userId ?
            <button type="button" onClick={handleDelete}>Delete Spot</button> :
            <button type="button" onClick={handleDelete}>Leave a review </button>
}
        </div>
    )
}
export default LocationPage