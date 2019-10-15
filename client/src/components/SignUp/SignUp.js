import React from 'react';
import './SignUp.css';
const SignUp = ({ username, password, retypedPassword, 
  handleUsernameChange, handlePasswordChange, handleRetypedPasswordChange }) => {
    return (
      <div class="container">
        <h2 class="text-center">SignUp</h2>
        <form>
          <div class="form-group">
            <label>Email address</label>
              <input
                class="form-control"
                name="email"
                type="email"
                placeholder="doe@example.com"
                value={ username }
                onChange={ ({ target }) => handleUsernameChange(target.value) }
              />
          </div>
          <div class="form-group">
            <label>Password</label>
              <input
                class="form-control"
                name="password"
                type="password"
                placeholder="password"
                value={ password }
                onChange={ ({ target }) => handlePasswordChange(target.value) }
              />
          </div>
          <div class="form-group">
            <label>Re-enter password</label>
              <input
                class="form-control"
                name="reEnter password"
                type="password"
                placeholder="re-enter password"
                value={ retypedPassword }
                onChange={ ({ target }) => handleRetypedPasswordChange(target.value)}
              />
          </div>
          <button class="btn btn-primary" type="submit">Sign-up</button>
        </form>
      </div>
    );
}
export default SignUp;