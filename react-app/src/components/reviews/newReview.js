import React, { useState} from "react";
import { useDispatch,useSelector} from "react-redux";
import {newReview} from '../../store/review'




const ReviewForm = ({setShowModal,locationId}) =>{
    const userId = useSelector((state) => state.session?.user?.id);
    const dispatch = useDispatch();
    const [review, setReview] = useState('')
    const [errors, setErrors] = useState([])
    

        
        const handleSubmit = async (e) => {
        e.preventDefault();
        let error = [];
        if(review.length === 0 || review.length < 5){
            error.push("Please enter a story that is 5 or more characters.")
        }
        if(error.length){
            setErrors(error)
            return
        }
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
            <div>
            {errors.map((error, ind) => (
              <div className="errors" key={ind}>{error}</div>
            ))}
            </div>
                <fieldset>
                    <legend>Write a new story!</legend>
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