import {NavLink} from 'react-router-dom'
import { useEffect } from 'react'
import {useDispatch}from 'react-redux'
import {useSelector} from 'react-redux'
import {AllLocations,getSingleLocation, deleteLocation} from '../../store/location'
import { useParams } from 'react-router'
import LocationPage from './locationPage'
import { useHistory } from 'react-router-dom'

function LoadLocation()  {
    const dispatch=useDispatch();
    const history = useHistory();
   const {locationId} = useParams()
   const userId = useSelector((state) => state.session?.user?.id)
    const locationOne = useSelector(state => state.location)
    const location = locationOne[locationId]
    useEffect(()=>{
        dispatch(getSingleLocation(locationId))
    },[dispatch, locationId])
    
    useEffect((id) => {
        dispatch(getSingleLocation(id))
    }, [dispatch])
    
    const handleDelete = async (e) => {
        e.preventDefault()

        dispatch(deleteLocation(location.id))
        history.push('/home')
    }
    return(
        <div>
            <div>
                <NavLink to='/locations'>Home</NavLink>
            </div>
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
export default LoadLocation