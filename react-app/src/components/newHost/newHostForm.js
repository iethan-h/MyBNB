/* eslint-disable no-unused-vars */
import React, { useState} from "react";
import { useDispatch,useSelector} from "react-redux";



const NewHostForm = () => {
    return (
        <div>
            <form>
                <fieldset>
                    <legend>Host a location</legend>
                        <div>
                            <input type="text" placeholder="Address"></input>
                        </div>
                        <div>
                            <input type="text" placeholder="City"></input>
                        </div>
                        <div>
                            <input type="text" placeholder="State"></input>
                        </div>
                        <div>
                            <input type="text" placeholder="Country"></input>
                        </div>
                        <div>
                            <input type="text" placeholder="Price per day"></input>
                        </div>
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                </fieldset>
            </form>   
        </div>
    )
}
export default NewHostForm