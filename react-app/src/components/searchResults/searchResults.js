import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './searchResults'

function SearchDisplay() {

    const locations = useSelector(state => Object.values(state.search));

    //Scroll to the top of page
    document.documentElement.scrollTop = 0;

    return (
        <>
           
                <div className="yourlocationsContainer">
                    {locations?.length > 0 && locations[0] !== null && (
                        <div className="yourlocationsInfoAndMapContainer" id="searchResultHeader">
                            <div className="yourlocationList">
                                <div className="yourlocationsAndAddButton">
                                    {locations?.length === 1? (
                                        <h1>{`Search Results - 1 location`}</h1>
                                    ) : (
                                        <h1>{`Search Results - ${locations?.length} locations`}</h1>
                                    )}
                                </div>
                                
                                {locations?.map(location =>
                                    <>
                                    
                                        <div className='one_location' style={{display:"flex"},{justifyContent:"center"},{margin:"center"}}>
                                            <NavLink to={`/locations/${location?.id}`} className="one_location_li">
                                                <div className="locationImage">
                                                    <img className="locationImg" src={location?.image} alt=""/>
                                                </div>
                                                <div className="locationAddress">
                                                    <p className="one_location_li">{location?.address}</p>
                                                </div>
                                                <div className="locationCity">
                                                    <p className="one_location_li">{location?.city}</p>
                                                </div>
                                                <div className="locationState">
                                                    <p className="one_location_li">{location?.state}</p>
                                                </div>
                                                <div className="locationCountry">
                                                    <p className="one_location_li">{location?.country}</p>
                                                </div>
                                            </NavLink>
                                        </div>
                                </>
                                )}
                            </div>
                        </div>
                    )}
                    {locations.length === 0 &&  (
                        <div className="yourlocationsInfoAndMapContainer">
                            <div className="yourlocationList">
                                <div className="yourlocationsAndAddButton">
                                    <h1>No Search Results</h1>
                                </div>
                            </div>
                        </div>
                    )}
                    {locations[0] === null && (
                        <div className="yourlocationsInfoAndMapContainer">
                            <div className="yourlocationList">
                                <div className="yourlocationsAndAddButton">
                                    <h1>Enter a Search</h1>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
        </>
    )
}

export default SearchDisplay;
