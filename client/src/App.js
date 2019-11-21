import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
} from 'react-router-dom';


import NavBar from './components/NavBar/NavBar';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import HomePage from './pages/HomePage/HomePage';

import CreateMealPostPage from './pages/CreateMealPostPage/CreateMealPostPage';
import CreateRestaurantPage from './pages/CreateRestaurantPage/CreateRestaurantPage';

import './App.css';


function App() {
  return(
    <Router>
      <NavBar />
      <div className="container">
        <Switch>
          <Route path="/login" exact component={ LoginPage } />
          <Route path="/signup" component={ SignUpPage } />
          <Route path="/restaurant/create-post" exact component={ CreateMealPostPage }/>
          <Route path="/restaurant/add-restaurant" exact component={ CreateRestaurantPage }/>
          <Route path="/" exact component={ HomePage } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
