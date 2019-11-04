import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
} from 'react-router-dom';


import LoggedOutNavBar from './components/NavBars/LoggedOutNavBar';
import LoginPage from './pages/LoginPage/LoginPage';
import CustomerSignUpPage from './pages/CustomerSignUpPage/CustomerSignUpPage';
import ResturantSignUpPage from './pages/RestaurantSignUpPage/RestaurantSignUpPage';
import CreateMealPostPage from './pages/CreateMealPostPage/CreateMealPostPage';

import './App.css';


function App() {
  return(
    <Router>
      <LoggedOutNavBar/>
      <div className="container">
        <Switch>
          <Route path="/login" exact component={ LoginPage } />
          <Route path="/signup/customer" component={ CustomerSignUpPage } />
          <Route path="/signup/restaurant" exact component={ ResturantSignUpPage }/>
          <Route path="/restaurant/create-post" exact component={ CreateMealPostPage }/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
