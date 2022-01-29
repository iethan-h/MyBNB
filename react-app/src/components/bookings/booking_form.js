// import DatePicker from 'react-calendar';
import { useEffect,useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router'
import addBooking from '../../store/booking'
import DatePicker from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function BookingForm({locationInfo}){
    const dispatch = useDispatch();
    const [showCalendar, setShowCalendar] = useState(false)
    const {locationId} = useParams();
    const [value, onChange] = useState(null);
    const [startDate,setStartDate] = useState(new Date())
    const [endDate,setEndDate] = useState(new Date())
    const userId = useSelector((state) => state.session?.user?.id);
    const [date, setDate] = useState(new Date());

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            locationId,
            userId,
            startDate,
            endDate,
        }
        dispatch(addBooking(payload))
    }
    
    return(
        <>
        <div>
            <p>Book this location</p>
        </div>
        <div>
            <form>
                <div>
                <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
                // selectsStart // tells this DatePicker that it is part of a range*
                startDate={startDate}
                />
                </div>
                <button type='submit' onclick={handleSubmit}>Submit</button>
            </form>
        </div>
        </>
    )
}
export default BookingForm