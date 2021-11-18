const NewHost = () => {
    return (
        <div>
            <fieldset>
                <form>
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
                </form>
            </fieldset>   
        </div>
    )
}
export default NewHost