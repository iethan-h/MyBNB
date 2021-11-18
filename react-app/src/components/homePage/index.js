import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import LogoutButton from '../auth/LogoutButton'
import Search from '../search/searchForm'

const Home = () =>{
    
    return(
        <> 
        <div> 
            <LogoutButton />
        </div>
        <div>
            <a href=' '>Host a location</a>
        </div>
        <div>
            <a href=' '>Browse</a>
        </div>
        <div>
            <Search/>
        </div>
        <div className='homeBody'>
            <h1 className='greeter'>Find your next adventure with Mybnb!</h1>
        </div>
        
        </>
    )
}

export default Home