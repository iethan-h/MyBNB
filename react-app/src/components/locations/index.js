import {NavLink} from 'react-router-dom'
import { useState, useEffect } from 'react'
import LocationCard from './locationCard'
import {useDispatch}from 'react-redux'
import {useSelector} from 'react-redux'
import {AllLocations} from '../../store/location'

function LocationFeed()  {
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
            <h1>Hello from locations!</h1>
            <div>
                {locations?.map((location)=>(
                    <LocationCard key={location?.id} location={location}/>                   
                ))}
            </div>
       </div>
    )
}
export default LocationFeed