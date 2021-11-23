import React, { useState} from "react";
import { useDispatch,useSelector} from "react-redux";
import {newReview} from '../../store/review'




const ReviewForm = ({setShowModal}) =>{
    const userId = useSelector((state) => state.session?.user?.id);
    const locationId = useSelector((state) => state.location?.id);
    const dispatch = useDispatch();
    // const [errors, setErrors] = useState([])
    const [review, setReview] = useState('')
    

        
        const handleSubmit = async (e) => {
        e.preventDefault();

        const payload ={
            userId,
            review,
            locationId

        }
         dispatch(
            newReview(payload)
        )
    }
    
    return (
        <div>
            <form>
                <fieldset>
                    <legend>Write a new review</legend>
                        <div>
                            <input
                             type="text" 
                             placeholder="Type here ..." 
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