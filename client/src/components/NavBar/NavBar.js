import React from 'react';
import { withRouter } from 'react-router-dom';

import LoggedInNavBar from './LoggedInNavBar/LoggedInNavBar';
import LoggedOutNavBar from './LoggedOutNavBar/LoggedOutNavBar';

import auth from '../../services/auth';

function NavBar() {
  if(auth.isAuthenticated) {
    console.log('is authenticated!');
    return(<LoggedInNavBar />);
  }

  return(<LoggedOutNavBar />);
}

export default withRouter(NavBar);