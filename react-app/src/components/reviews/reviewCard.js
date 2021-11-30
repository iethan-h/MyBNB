import { useDispatch,useSelector} from "react-redux";
import { useParams } from 'react-router'
import {deleteReview, editReview} from '../../store/review'
import { Modal } from '../../context/Modal';
import { useState, useEffect } from 'react'
import ReviewEdit from './editReview'


const ReviewCard = ({review}) =>{
    const [showModal, setShowModal] = useState(false);
    const userId = useSelector((state) => state.session?.user?.id)
    const dispatch = useDispatch();
    
    const handleDelete = async (e) => {
        e.preventDefault()
        dispatch(deleteReview(review.id))
    }
    
    return(
        <div>
            <div className={'one_location'}>
                <p>{review.review}</p>
            </div>
            <div>
                {review?.userId === userId ?
                <>
                    <button type="button" onClick={handleDelete}>Delete review</button> 
                    
                <button onClick={() => setShowModal(true)}>Edit Review</button>
                    {showModal && (
                        <Modal onClose={() => setShowModal(false)}>
                             <ReviewEdit setShowModal={setShowModal} reviewId={review.id}/>
                        </Modal>
                    )}
            
                </>
                :
                null}
            </div>
        </div>
    )
}

export default ReviewCard