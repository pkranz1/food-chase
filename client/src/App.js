import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link,
  NavLink
} from 'react-router-dom';

import Navigation from './components/Navigation';
import CustomerSignupPage from './pages/CustomerSignupPage';
import WrongPage from './components/WrongPage';

function App() {
  return(
    <Router>
      <div className="container-fluid">
        <div>
          <Switch>
            <Route path="/Login" component={ CustomerSignupPage }/>
          </Switch>
        </div>
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
