import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
} from 'react-router-dom';


import Navigation from './components/Navigation';
import LoginPage from './pages/LoginPage/LoginPage';
import CustomerSignUpPage from './pages/CustomerSignUpPage/CustomerSignUpPage';
import ResturantSignUpPage from './pages/RestaurantSignUpPage/RestaurantSignUpPage';
import CreateMealPostPage from './pages/CreateMealPostPage/CreateMealPostPage';

import './App.css';


function App() {
  return(
    <Router>
      <Navigation />
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

/*
class App extends React.Component {
  render() {
    return (
      
      <LoginPage/>
        <Router>
          <Navigation />
          <div className="container-fluid text-center">
            <div className="row justify-content-center">
              <Switch>
                <Route path="/posts/new" component={PostFormPage} />
                <Route path="/posts/:id" component={ShowPostPage} />
                <Route path="/about-us" component={AboutUsPage} />
                <Route path="/" component={PostsListPage} />
              </Switch>
            </div>
          </div>
        </Router>
    );
  }
}
*/


export default App;
