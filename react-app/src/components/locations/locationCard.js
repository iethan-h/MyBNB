import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { getSingleLocation } from '../../store/location'
import { useHistory } from 'react-router-dom'
import { deleteLocation } from '../../store/location'
import { AllLocations } from '../../store/location'
import { NavLink } from 'react-router-dom';

const LocationCard = ({location}) => {
    const { locationId } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.session?.user?.id)
    // const locations = useSelector(state => Object.values(state.location))

    useEffect((id) => {
        dispatch(AllLocations(locationId))
    }, [dispatch, locationId])

    const handleDelete = async (e) => {
        e.preventDefault()
        dispatch(deleteLocation(locationId))
        history.push('/home')
    }


    
    return (
        <>
            <div className={'one_location'}>
            {/* <img className="one_location_img" src={locations?.Images[0].url} alt={locations?.address}></img> */}
                <ul className="one_location_details">
                    <NavLink to={`/locations/${location?.id}`} className="one_location_li">{location?.id}'s Location</NavLink>
                    <li className="one_location_li">{location?.address}</li>
                    <li className="one_location_li">{location?.city}</li>
                    <li className="one_location_li">{location?.state}</li>
                    <li className="one_location_li">{location?.country}</li>
                    <li className="one_location_li">${location?.price} per night</li>
                </ul>
            </div>
            {location?.userId === userId ?
            <button type="button" onClick={handleDelete}>Delete Spot</button> :
            null}
        </>
    )
}

export default LocationCard