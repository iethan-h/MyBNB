/* eslint-disable no-unused-vars */
import React, { useState} from "react";
import { useDispatch,useSelector} from "react-redux";
import {newLocation,AllLocations} from '../../store/location'
import {useFormik} from 'formik'
import * as yup from 'yup';


const NewHostForm = () => {

    const dispatch = useDispatch();
    const [errors, setErrors] = useState([])
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')
    const [price, setPrice] = useState('')
    const userId = useSelector((state) => state.session?.user?.id);
    const [image, setImage] = useState('')
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload ={
            userId,
            address,
            city,
            state,
            country,
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
                    <legend>Host a location</legend>

                        <div>
                            <input
                             type="text" 
                             placeholder="Address" 
                             value={address}
                             onChange={(e) => setAddress(e.target.value)}
                             />
                        </div>
                        <div>
                            <input 
                            type="text" 
                            placeholder="City"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            />                           
                        </div>
                        <div>
                            <input 
                            type="text" 
                            placeholder="State"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            />                 
                        </div>
                        <div>
                            <input 
                            type="text" 
                            placeholder="Country"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            />                       
                        </div>
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