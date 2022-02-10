import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useSearch } from '../context/SearchContext';
import { login, logout } from '../../store/session';
import { signUp } from '../../store/session';

const ProfileButton = ({}) => {
    const dispatch = useDispatch();
    
    return (
        <>
        
        </>
    )
}