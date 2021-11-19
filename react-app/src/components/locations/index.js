import {NavLink} from 'react-router-dom'
import LocationCard from './locationCard'

const LocationFeed = () => {
    
    return(
        <div>
            <div>
                <NavLink to='/home'>Home</NavLink>
            </div>
            <h1>Hello from locations!</h1>
            <LocationCard/>
        </div>
    )
}
export default LocationFeed