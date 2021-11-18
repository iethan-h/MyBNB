const Search = () => {
    return(
        <div>
            <fieldset className="form-field">
            <form>
                <legend>Find a place to stay</legend>
                
                    <div>
                        <input placeholder="Location" />
                    </div>
                    <div>
                        <input placeholder="Start Date" />
                        <input placeholder="End Date" />
                    </div>
                        <div>
                            <button type='submit' className='searchButton'>Search</button>
                        </div>
                    
            </form>
           </fieldset>
        </div>
    )
}
export default Search