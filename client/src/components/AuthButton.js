import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import auth from '../services/auth'

function AuthButton({ history, }) {
  function logout() {
    auth.signout()
    .then(() => history.push('/'));
  }

  if(!auth.isAuthenticated) {
    return(
      <Link className="btn" to="/login">Login</Link>
    );
  }

  return(
    <div>
      <button className="btn" onClick={ logout }>Logout</button>
    </div>
  );
}

export default withRouter(AuthButton);