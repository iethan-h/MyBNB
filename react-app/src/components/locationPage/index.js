import {NavLink} from 'react-router-dom'
import { useEffect } from 'react'
import {useDispatch}from 'react-redux'
import {useSelector} from 'react-redux'
import {AllLocations} from '../../store/location'
import LocationPage from './locationPage'

function LoadLocation()  {
    const dispatch=useDispatch();
    
    const locations = useSelector(state => Object.values(state.location))
    
    useEffect(()=>{
        dispatch(AllLocations())
    },[dispatch])
    
    return(
        <div>
            <div>
                <NavLink to='/home'>Home</NavLink>
            </div>
            <div>
                {locations?.map((location)=>(
                    <LocationPage key={location?.id} location={location}/>                   
                ))}
            </div>
       </div>
    )
}
export default LoadLocation