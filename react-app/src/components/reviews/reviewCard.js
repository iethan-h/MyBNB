import { useDispatch,useSelector} from "react-redux";
import deleteReview from '../../store/review'
import { useParams } from 'react-router'

const ReviewCard = ({review}) =>{
    const userId = useSelector((state) => state.session?.user?.id)
    const dispatch = useDispatch();
    const { reviewId } = useParams();
    
    const handleDelete = async (e) => {
        e.preventDefault()
        dispatch(deleteReview(reviewId))
    }
    
    return(
        <div>
        <div className={'one_location'}>
                <ul className="one_location_details">
                    <li className="one_location_li">{review?.review}</li>
                </ul>
            </div>
            <div>
            {review?.userId === userId ?
            <button type="button" onClick={handleDelete}>Delete review</button> :
            null}
            </div>
            </div>
    )
}

export default ReviewCard