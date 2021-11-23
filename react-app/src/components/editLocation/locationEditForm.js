import { useState} from 'react'
import {useDispatch, useSelector}from 'react-redux'
import {editOneLocation} from '../../store/location'
import { useParams } from 'react-router'




const EditMyLocation = ({setShowModal, location}) => {
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')

    const dispatch=useDispatch();

    
    const handleEdit = async (e) => {
    e.preventDefault()
    
    const locationEdit = {
        address,
        city,
        state,
        country,
        price,
        image  
    }
    dispatch(editOneLocation(locationEdit, location?.id))
     setShowModal(false)
    }
    return(
        <>
        <div>
            <form>
                <fieldset>
                    <legend>Udate a location</legend>

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
                            <button onClick={handleEdit}>Submit</button>
                        </div>
                </fieldset>
            </form>   
        </div>
        </>
    )
}
export default EditMyLocation