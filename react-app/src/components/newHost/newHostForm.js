/* eslint-disable no-unused-vars */
import React, { useState} from "react";
import { useDispatch,useSelector} from "react-redux";
import {newLocation,AllLocations} from '../../store/location'
import {useFormik} from 'formik'
import * as yup from 'yup';


const NewHostForm = () => {
    
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.session?.user?.id)
    
    
    const formik = useFormik({
        initialValues:{
            address:"",
            city:"",
            state:"",
            country:"",
            price:"",
            image:"",
        },
        validationSchema: yup.object({
            address: yup.string().min(5).max(50).required("Address must be between 5-50 characters!"),
            city: yup.string().min(5).max(50).required("City must be between 5-50 characters!"),
            state: yup.string().min(5).max(50).required("State must be between 5-50 characters!"),
            country: yup.string().required('Please add a country!'),
            price: yup.number().min(50).required('Please add a price!'),
            image: yup.string().required('Please add an image!'),
            
          }),
          onSubmit: async (values) => {
            dispatch(newLocation(values).then(()=>dispatch(AllLocations())))
        },
    })
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="formField">
                    <input
                    placeholder="Address"
                    id='address'
                    name='address'
                    type='text'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.address}
                    />
                    {formik.touched.address && formik.errors.address ?(
                        <div className='errorText'>{formik.errors.address}</div>
                    ): null}
                </div>
                <div className="formField">
                    <input
                    placeholder="City"
                    id='city'
                    name='city'
                    type='text'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.city}
                    />
                    {formik.touched.city && formik.errors.city ?(
                        <div className='errorText'>(formik.errors.city)</div>
                    ): null}
                </div>
                <div className="formField">
                    <input
                    placeholder="State"
                    id='state'
                    name='state'
                    type='text'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.state}
                    />
                    {formik.touched.state && formik.errors.state ?(
                        <div className='errorText'>(formik.errors.state)</div>
                    ): null}
                </div>
                <div className="formField">
                    <input
                    placeholder="Country"
                    id='country'
                    name='country'
                    type='text'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.country}
                    />
                    {formik.touched.country && formik.errors.country ?(
                        <div className='errorText'>(formik.errors.country)</div>
                    ): null}
                </div>
                <div className="formField">
                    <input
                    placeholder="Price"
                    id='price'
                    name='price'
                    type='text'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.price}
                    />
                    {formik.touched.price && formik.errors.price ?(
                        <div className='errorText'>(formik.errors.price)</div>
                    ): null}
                </div>
                <div className="formField">
                    <input
                    placeholder="Image url"
                    id='image'
                    name='image'
                    type='text'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.image}
                    />
                    {formik.touched.image && formik.errors.image ?(
                        <div className='errorText'>(formik.errors.image)</div>
                    ): null}
                </div>
            </form>
    </div>
    )
    // const dispatch = useDispatch();
    // const [errors, setErrors] = useState([])
    // const [address, setAddress] = useState('')
    // const [city, setCity] = useState('')
    // const [state, setState] = useState('')
    // const [country, setCountry] = useState('')
    // const [price, setPrice] = useState('')
    // const userId = useSelector((state) => state.session?.user?.id);
    // const [image, setImage] = useState('')
    
    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     const payload ={
    //         userId,
    //         address,
    //         city,
    //         state,
    //         country,
    //         price,
    //         image,

    //     }
    //      dispatch(
    //         newLocation(payload)
    //     )
    // }
    
    // return (
    //     <div>
    //         <form>
    //             <fieldset>
    //                 <legend>Host a location</legend>

    //                     <div>
    //                         <input
    //                          type="text" 
    //                          placeholder="Address" 
    //                          value={address}
    //                          onChange={(e) => setAddress(e.target.value)}
    //                          />
    //                     </div>
    //                     <div>
    //                         <input 
    //                         type="text" 
    //                         placeholder="City"
    //                         value={city}
    //                         onChange={(e) => setCity(e.target.value)}
    //                         />                           
    //                     </div>
    //                     <div>
    //                         <input 
    //                         type="text" 
    //                         placeholder="State"
    //                         value={state}
    //                         onChange={(e) => setState(e.target.value)}
    //                         />                 
    //                     </div>
    //                     <div>
    //                         <input 
    //                         type="text" 
    //                         placeholder="Country"
    //                         value={country}
    //                         onChange={(e) => setCountry(e.target.value)}
    //                         />                       
    //                     </div>
    //                     <div>
    //                         <input 
    //                         type="text" 
    //                         placeholder="Price per day"
    //                         value={price}
    //                         onChange={(e) => setPrice(e.target.value)}
    //                         />                         
    //                     </div>
    //                     <div>
    //                         <input 
    //                         type="text" 
    //                         placeholder="Image URL"
    //                         value={image}
    //                         onChange={(e) => setImage(e.target.value)}
    //                         />                         
    //                     </div>
    //                     <div>
    //                         <button onClick={handleSubmit}>Submit</button>
    //                     </div>
    //             </fieldset>
    //         </form>   
    //     </div>
    // )
    
}
export default NewHostForm