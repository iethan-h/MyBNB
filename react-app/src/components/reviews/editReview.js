import React, { useState} from "react";
import { useDispatch,useSelector} from "react-redux";
import {editReview} from '../../store/review'




const ReviewEdit = ({reviewId,locationId,reviews}) =>{
    const userId = useSelector((state) => state.session?.user?.id);
    const dispatch = useDispatch();
    const [review, setReview] = useState(reviews.review)  
    
    
    const handleEdit = async (e) => {
    e.preventDefault();

    const payload ={
        userId,
        review,
        locationId
        }
        await dispatch(
        editReview(payload,reviewId)
        )
        window.location.reload(true);
    }
    
    return (
        <div>
            <form>
                <fieldset>
                    <legend>Change your review</legend>
                        <div>
                            <textarea
                             type="text" 
                             placeholder="Type here..." 
                             value={review}
                             onChange={(e) => setReview(e.target.value)}
                             />
                        </div>
                        
                        <div>
                            <button onClick={handleEdit}>Submit</button>
                        </div>
                </fieldset>
            </form>   
        </div>
    )
    
    
}

export default ReviewEdit