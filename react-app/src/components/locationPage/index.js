import {NavLink} from 'react-router-dom'
import { useEffect,useState} from 'react'
import {useDispatch}from 'react-redux'
import {useSelector} from 'react-redux'
import {getSingleLocation, deleteLocation} from '../../store/location'
import { useParams } from 'react-router'
import { useHistory } from 'react-router-dom'
// import EditMyLocation from '../editLocation'
import ReviewCard from '../reviews/reviewCard'
import {AllReviews} from '../../store/review'
import NewReview from '../reviews/newReview'
import { Modal } from '../../context/Modal';
import ReviewForm from '../reviews/newReview'
import ReviewEdit from '../reviews/editReview'

function LoadLocation()  {
    const [showModal, setShowModal] = useState(false);
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
                    <hr />
                    </div>
                    <div className='options'>

            
                       
            
                <button onClick={() => setShowModal(true)}>Write a new story</button>
                    {showModal && (
                        <Modal onClose={() => setShowModal(false)}>
                            <ReviewForm  setShowModal={setShowModal}  locationId={locationId}/>
                        </Modal>
                    )}
                    <h2>Read stories from visitors</h2>
                        {location?.userId === userId ?
                <>
                    {/* <EditMyLocation /> */}
                    <button className="deleteLocation" type="button"  onClick={handleDelete}>Delete Location</button>            
                </>:
                        null
            }  
            
            </div>
           
            
            
                 
         <div>
            {reviews?.map((review) =>(
                <div className="reviewCards">
                    <ReviewCard key={review?.id} review={review}/>
                </div>
            ))}

            {/* <NewReview locationId={locationId}/> */}
        </div>
        </div>

    )
}
export default LoadLocation