import {NavLink} from 'react-router-dom'
import { useState, useEffect } from 'react'
import LocationCard from './locationCard'
import {useDispatch}from 'react-redux'
import {useSelector} from 'react-redux'
import {AllLocations} from '../../store/location'
import './index.css'

function LocationFeed()  {
    const dispatch=useDispatch();
    
    const locations = useSelector(state => Object.values(state.location))
    
    useEffect(()=>{
        dispatch(AllLocations())
    },[dispatch])
    
    return(
        <div className='locationContainer'>
            <div>
                <NavLink to='/home'>Home</NavLink>
            </div>
            <div className='feedWrapper'>
                {locations?.map((location)=>(
                    <div className='locationCards'>
                    <LocationCard key={location?.id} location={location}/> 
                    </div>                  
                ))}
            </div>
       </div>
    )
}
export default LocationFeed