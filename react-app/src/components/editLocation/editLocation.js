import React, { useState} from "react";
import { useDispatch} from "react-redux";
import {editOneLocation} from '../../store/location'


const EditLocation = ({locationId, locationInfo}) => {
    const dispatch = useDispatch();
    const [price, setPrice] = useState(locationInfo.price)

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const {address, city, state, image, country} = locationInfo
        const payload = {
            address, 
            city, 
            state,
            country, 
            image,
            price
        }
         dispatch(
            editOneLocation(payload,locationId)
        )
    }
    return (
        <div>
            <form>
                <fieldset>
                    <legend>Edit your location price</legend>
                        <div>
                            <input 
                            type="text" 
                            placeholder="Price per day"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
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
export default EditLocation