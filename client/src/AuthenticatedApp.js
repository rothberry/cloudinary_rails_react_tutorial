import './App.css';
import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import Navbar from './components/Navbar';
import Posts from './components/Posts';
import Profile from './components/Profile';

function AuthenticatedApp({ currentUser, setCurrentUser }) {
  const history = useHistory()
  
  const handleLogout = () => {
    fetch('/api/logout', {
      method: 'DELETE',
      credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          setCurrentUser(null)
          history.push('/')
        }
      })
  }

  return (
    <div className="App max-w-5xl">
      <Navbar 
        currentUser={currentUser}
        handleLogout={handleLogout}
      />
      <Switch>
        <Route exact path="/">
          <Posts />
        </Route>
        <Route exact path="/profile">
          <Profile
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
          />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default AuthenticatedApp;