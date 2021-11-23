import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { authenticate } from './store/session';
import Home from './components/homePage'
import Splash from './components/splashPage'
import LocationFeed from './components/locations'
import MyLocations from './components/myLocations'
import LoadLocation from './components/locationPage'
import NewReview from './components/reviews'
import UpdateLocation from './components/editLocation'

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
    
      <Switch>
        
        <Route path='/' exact={true}>
          <NavBar />
          <Splash />          
        </Route>
        
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        
        <ProtectedRoute path='/home' exact={true} >
          <Home />
        </ProtectedRoute>
        
        <Route path='/locations' exact={true}>
          <LocationFeed />
        </Route>
        
        <Route path='/locations/:locationId' exact={true}>
          <LoadLocation />
          <NewReview />
        </Route>
        
        <Route path='/locations/:userId' exact={true}>
          <MyLocations />
        </Route>
        
        <Route path='/locations/:locationId' exact={true}>
          <UpdateLocation />
        </Route>
        
        {/* <Route path='/locations/:locationId/reviews' exact={true}>
          <NewReview />
        </Route> */}
        
        
      </Switch>
      
    </BrowserRouter>
  );
}

export default App;
