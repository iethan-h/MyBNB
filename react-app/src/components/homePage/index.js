import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import LogoutButton from '../auth/LogoutButton'

const Home = () =>{
    
    return(
        <>
         <LogoutButton />
        <h1>THIS IS A TEST</h1>
        </>
    )
}

export default Home