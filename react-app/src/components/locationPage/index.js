/* eslint-disable no-unused-vars */
import {NavLink} from 'react-router-dom'
import { useEffect,useState} from 'react'
import {useDispatch}from 'react-redux'
import {useSelector} from 'react-redux'
import {getSingleLocation, deleteLocation,AllLocations} from '../../store/location'
import { useParams } from 'react-router'
import { useHistory } from 'react-router-dom'
import ReviewCard from '../reviews/reviewCard'
import {AllReviews} from '../../store/review'
import { Modal } from '../../context/Modal';
import ReviewForm from '../reviews/newReview'
import ReviewEdit from '../reviews/editReview'
import './locationPage.css'

function LoadLocation()  {
    const [showModal, setShowModal] = useState(false);
    const dispatch=useDispatch();
    const history = useHistory();
    const {locationId} = useParams()
    const userId = useSelector((state) => state.session?.user?.id)
    const locationOne = useSelector(state => state.location)
    const location = locationOne[locationId]
    
    
    useEffect(()=>{
        dispatch(AllLocations(locationId))
    },[dispatch, locationId])
    
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
                <NavLink className='loggedInNav' to='/home'>Home</NavLink>
                <NavLink className='loggedInNav' to='/locations'>Back to browse</NavLink>
            </div>
                <div className="locationInfo">
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
                        <>
                            <button className="deleteLocation" type="button"  onClick={handleDelete}>Delete Location</button>            
                        </>:
                                null
                        }  
                        <hr />
                    </div>
                    <div className='options'>    
                        <button className='newStory' onClick={() => setShowModal(true)}>Write a new story</button>
                            {showModal && (
                                <Modal onClose={() => setShowModal(false)}>
                                    <ReviewForm  setShowModal={setShowModal}  locationId={locationId}/>
                                </Modal>
                            )}
                            <div className='userStories'>
                                <h2 className="reviewGreeting" >Read stories from visitors</h2>
                            </div>           
                    </div>      
                        <div className='reviews'>
                            {reviews?.map((review) =>(
                                <div className="reviewCards">
                                    <ReviewCard key={review?.id} review={review} locationId={locationId}/>
                                </div>
                            ))}
                        </div>
                    </div>

    )
}
export default LoadLocation