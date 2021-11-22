import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { getSingleLocation } from '../../store/location'
import { useHistory } from 'react-router-dom'
import { deleteLocation } from '../../store/location'
import { AllLocations } from '../../store/location'

const LocationCard = ({location}) => {
    const { id } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.session?.user?.id)
    const locations = useSelector(state => Object.values(state.location))

    useEffect((id) => {
        dispatch(AllLocations(id))
    }, [dispatch])

    const handleDelete = async (e) => {
        e.preventDefault()

        dispatch(deleteLocation(id))
        history.push('/home')
    }


    
    return (
        <>
            <div className={'one_location'}>
            {/* <img className="one_location_img" src={locations?.Images[0].url} alt={locations?.address}></img> */}
                <ul className="one_location_details">
                    <li className="one_location_li">{locations?.address}</li>
                    <li className="one_location_li">{locations?.city}</li>
                    <li className="one_location_li">{locations?.state}</li>
                    <li className="one_location_li">{locations?.country}</li>
                    <li className="one_location_li">${locations?.price} per night</li>
                </ul>
            </div>
            {locations?.userId === userId ?
            <button type="button" onClick={handleDelete}>Delete Spot</button> :
            null}
        </>
    )
}

export default LocationCard