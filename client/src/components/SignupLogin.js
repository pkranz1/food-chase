import React from 'react';

const SignupLogin = ({ username, password, retypedPassword, handleUsernameChange, 
  handlePasswordChange, handleRetypedPasswordChange }) => {
  return (
    <div className="col mx-auto">
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Customer SignUp</h2>
        <div className="container">
          <form>
            <div className="form-group">
              <label for="emailInput">Email address</label>
              <input
                className="form-control"
                name="email"
                type="email"
                placeholder="doe@example.come"
              />
            </div>
            <div className="form-group">
              <label for="passwordInput">Password</label>
              <input
                className="form-control"
                name="password"
                type="password"
                placeholder="password"
              />
            </div>
            <button className="btn btn-primary" type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
    </div>

    /*
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
      */
    );
}
export default SignupLogin;