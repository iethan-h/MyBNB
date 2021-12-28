import React, { useState} from "react";
import { useDispatch,useSelector} from "react-redux";
import {newLocation,AllLocations} from '../../store/location'


const NewHostForm = () => {
    const dispatch = useDispatch();
    const [price, setPrice] = useState('')
    const userId = useSelector((state) => state.session?.user?.id);
    const [image, setImage] = useState('')
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload ={
            userId,
            price,
            image,

        }
         dispatch(
            newLocation(payload)
        )
    }
    
    return (
        <div>
            <form>
                <fieldset>
                    <legend>Edit your location</legend>
                        <div>
                            <input 
                            type="text" 
                            placeholder="Price per day"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            />                         
                        </div>
                        <div>
                            <input 
                            type="text" 
                            placeholder="Image URL"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
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
export default NewHostForm