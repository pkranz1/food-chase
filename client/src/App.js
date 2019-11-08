import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
} from 'react-router-dom';


import NavBar from './components/NavBar/NavBar';
import LoginPage from './pages/LoginPage/LoginPage';
import CustomerSignUpPage from './pages/CustomerSignUpPage/CustomerSignUpPage';

import CreateMealPostPage from './pages/CreateMealPostPage/CreateMealPostPage';
import CreateRestaurantPage from './pages/CreateRestaurantPage/CreateRestaurantPage';

import './App.css';


function App() {
  console.log('the app component is re-rendering');
  return(
    <Router>
      <NavBar />
      <div className="container">
        <Switch>
          <Route path="/login" exact component={ LoginPage } />
          <Route path="/signup/customer" component={ CustomerSignUpPage } />
          <Route path="/restaurant/create-post" exact component={ CreateMealPostPage }/>
          <Route path="/restaurant/add-restaurant" exact component={ CreateRestaurantPage }/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
