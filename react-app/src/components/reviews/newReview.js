import React, { useState} from "react";
import { useDispatch,useSelector} from "react-redux";
import {newReview} from '../../store/review'




const ReviewForm = ({setShowModal,locationId}) =>{
    const userId = useSelector((state) => state.session?.user?.id);
    const dispatch = useDispatch();
    const [review, setReview] = useState('')
    

        
        const handleSubmit = async (e) => {
        e.preventDefault();

        const payload ={
            userId,
            review,
            locationId
        }
         await dispatch(
            newReview(payload)
        )
        window.location.reload(true);
    }
    
    return (
        <div>
            <form>
                <fieldset>
                    <legend>Write a new review</legend>
                        <div>
                            <textarea
                             type="text" 
                             placeholder="Type here..." 
                             value={review}
                             onChange={(e) => setReview(e.target.value)}
                             />
                        </div>
                        
                        <div>
                            <button onClick={handleSubmit}>Submit</button>
                        </div>
                </fieldset>
            </form>   
        </div>
    )
    
    
}

export default ReviewForm