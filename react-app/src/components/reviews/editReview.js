import React, { useState} from "react";
import { useDispatch,useSelector} from "react-redux";
import {editReview} from '../../store/review'




const ReviewEdit = ({reviewId,locationId}) =>{
    const userId = useSelector((state) => state.session?.user?.id);
    const dispatch = useDispatch();
    const [review, setReview] = useState('')  
    
    
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
        console.log("This is the payload",payload);
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