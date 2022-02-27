/* eslint-disable no-unused-vars */
import {NavLink} from 'react-router-dom'
import { useEffect,useState} from 'react'
import {useDispatch}from 'react-redux'
import {useSelector} from 'react-redux'
import {deleteLocation,AllLocations} from '../../store/location'
import { useParams } from 'react-router'
import { useHistory } from 'react-router-dom'
import ReviewCard from '../reviews/reviewCard'
import {AllReviews} from '../../store/review'
import { Modal } from '../../context/Modal';
import ReviewForm from '../reviews/newReview'
import './locationPage.css'
import UpdateLocation from '../editLocation'
import BookingForm from '../bookings/booking_form'
import {newBooking} from '../../store/booking'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';



function LoadLocation()  {
    const [showModal, setShowModal] = useState(false);
    const dispatch=useDispatch();
    const history = useHistory();
    const {locationId} = useParams()
    const user = useSelector((state) => state.session?.user)
    const locationOne = useSelector(state => state.location)
    const location = locationOne[locationId]
    const review =  useSelector(state => state.review)
    const [showCalendar, setShowCalendar] = useState(false)
    const reviews = useSelector(state =>Object.values(state.review))
    const { reviewId } = useParams();
    const [startDate,setStartDate] = useState(new Date())
    const [endDate,setEndDate] = useState(startDate)
    const userId = useSelector((state) => state.session?.user?.id);
    const bookings = useSelector(state => Object.values(state.booking))
    const [tomorrow, setTomorrow] = useState(null)
    const [date, setDate] = useState(null)
    const [formattedDate, setFormattedDate] = useState('')

    
    
    
    useEffect(() => {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        setTomorrow(tomorrow)
    }, [])

    const handleBooking = async (e) => {
        e.preventDefault();
        const payload = {
            userId,
            locationId,
            startDate: startDate.toDateString(),
            endDate:endDate.toDateString(),
        }
        dispatch(newBooking(payload))
        window.location.reload(true);
    }
    
    
    useEffect(()=>{
        dispatch(AllReviews(reviewId))
    },[dispatch,reviewId])
    
    useEffect(()=>{
        dispatch(AllLocations(locationId))
    },[dispatch, locationId])
    
    const handleDelete = async (e) => {
        e.preventDefault()

        dispatch(deleteLocation(location.id))
        history.push('/home')
    }
    

    // const tileDisabled = ({ date, view }) => {
    //     let walkDates = [];
    //     for (let walk of walks) {
    //         let date1 = new Date(walk?.date.slice(5,16))
    //         walkDates.push(date1)
    //     }

    //     if (view === 'month') {
    //         return walkDates.find(theDate => equalDates(theDate, date))
    //     }
    // }

    // let alreadyReviewed = false;
    let reviewCards;
    if (reviews){
        reviewCards = Object.values(reviews).map((review,idx) => {          
            if (location?.review_id?.includes(review.id)) {
                return <ReviewCard key={review?.id} review={review} locationId={locationId} />
            }
            // if (!alreadyReviewed && reviews[idx].userId === user?.id) {
            //     alreadyReviewed = true;             
            //   }
            return reviewCards
            
            
        })
        .reverse().slice()
    }
    useEffect(() => {
        if (date) {
            const displayDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
            setFormattedDate(displayDate)
        }
    }, [date])
    
    return(
        <div>
                <div className="locationArea">
                    <div className="locationInfo">
                        <img className="locationimg" src={location?.image} alt=""/>
                        <div className="info">
                            <div className="locationDetails">
                                <p className="one_location_li">{location?.address} {location?.city}, {location?.state}</p>
                            </div>
                            <div className="locationDetails">
                                <p className="one_location_li">{location?.country}</p>
                            </div>
                            <div className="locationDetails">
                                <p className="one_location_li">${location?.price} per night</p>
                            </div>
                       </div>

                    </div>
                    <hr className = 'bookingLine'/>
                    {location?.userId === user?.id ?
                        <>
                            <div className="locationOptions">                       
                                    <button className="deleteLocation" type="button"  onClick={handleDelete}>Delete Location</button>
                                    <UpdateLocation locationId={location}/>                              
                            </div> 
                                     
                        </>:
                        <div className="newBooking">
                        
                                
                            
                            <div className="bookingForm">
                                <div className="booking2">
                                    <p className="booking3">Book this location!</p>
                                </div>
                            <Calendar selectRange={true} minDate={tomorrow} onChange={([startDate, endDate]) => {            
                                setStartDate(startDate)
                                setEndDate(endDate)
                                }                               
                            }/>
                            </div>
                            <div className="bookingConfirm">
                                <div className="centerDiv">
                                    <p>${location?.price} per night</p>
                                </div>
                                <div className="leaveReview">
                                    <p style={{fontSize:"25px"}}>After your stay please feel free to leave a review!</p>
                                </div>
                                <div className="centerDiv" style = {{paddingTop:"50px"}}>
                                    <button type='submit' onClick={handleBooking} style={{fontSize:"25px"}} >Book location</button>
                                </div>
                            </div>
                        </div>
                        }  
                        <hr />
                    </div>
                    <div className='options'>
                        <div>
                        {/* {alreadyReviewed && location?.userId !== user?.id ? (
                            <div>
                                <button className='newStory' onClick={() => setShowModal(true)}>Write a new story</button>
                                {showModal && (
                                    <Modal onClose={() => setShowModal(false)}>
                                        <ReviewForm  setShowModal={setShowModal}  locationId={locationId}/>
                                    </Modal>
                                )}
                            </div>
                        ):null } */}
                            {location?.userId === user?.id && (
                            <>
                            
                            </>
                        )}
                        <div>
                        {location?.userId === user?.id ? (
                            <>
                            
                            </>
                        ):
                        <div>
                                <button className='newStory' onClick={() => setShowModal(true)}>Write a new story</button>
                                {showModal && (
                                    <Modal onClose={() => setShowModal(false)}>
                                        <ReviewForm  setShowModal={setShowModal}  locationId={locationId}/>
                                    </Modal>
                                )}
                                </div>
                            
                                }
                        </div>


                            </div>
                            <div className='userStories'>
                                <h2 className="reviewGreeting" >Read stories from visitors</h2>
                            </div>
           
                    </div>      
                        <div className='reviews'>
                            <div className='reviewCards'>
                                {reviewCards}
                            </div>
                        </div>
                    </div>

    )
}
export default LoadLocation