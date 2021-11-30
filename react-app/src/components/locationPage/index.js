import {NavLink} from 'react-router-dom'
import { useEffect} from 'react'
import {useDispatch}from 'react-redux'
import {useSelector} from 'react-redux'
import {getSingleLocation, deleteLocation} from '../../store/location'
import { useParams } from 'react-router'
import { useHistory } from 'react-router-dom'
// import EditMyLocation from '../editLocation'
import ReviewCard from '../reviews/reviewCard'
import {AllReviews} from '../../store/review'

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
    
    const reviews = useSelector(state =>Object.values(state.review))
    const { reviewId } = useParams();
    
    useEffect(()=>{
        dispatch(AllReviews(reviewId))
    },[dispatch,reviewId])
 
    return(
        <div>
            <div>
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/locations'>Back to browse</NavLink>
            </div>
            <div className="locationImage">
                        <img className="locationImg" src={location?.image} alt=""/>
                    </div>
                    <div className="locationAddress">
                        <p className="one_location_li">{location?.address}</p>
                    </div>
                    <div className="locationCity">
                        <p className="one_location_li">{location?.city}</p>
                    </div>
                    <div className="locationState">
                        <p className="one_location_li">{location?.state}</p>
                    </div>
                    <div className="locationCountry">
                        <p className="one_location_li">{location?.country}</p>
                    </div>
                    <div className="locationPrice">
                        <p className="one_location_li">${location?.price} per night</p>
                    </div>
            {location?.userId === userId ?
                <div>
                    {/* <EditMyLocation /> */}
                    <button type="button" onClick={handleDelete}>Delete Location</button>            
                </div>:
                        null
            }       
         <div>
            {reviews?.map((review) =>(
                <div className="reviewCards">
                    <ReviewCard key={review?.id} review={review}/>
                </div>
            ))}
        </div>
        </div>

    )
}
export default LoadLocation