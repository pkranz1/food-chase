import React from 'react';

const SignUp = ({ username, password, retypedPassword, 
  handleUsernameChange, handlePasswordChange, handleRetypedPasswordChange }) => {
    return (
      <div>
        <h2>SignUp</h2>
        <form>
          <div>
            <p>Username</p>
            <input
              name="username"
              type="text"
              value={ username }
              onChange={ ({ target }) => handleUsernameChange(target.value) }
            />
          </div>
          <div>
            <p>Password</p>
            <input
              name="password"
              type="password"
              value={ password }
              onChange={ ({ target }) => handlePasswordChange(target.value) }
            />
          </div>
          <div>
            <p>ReEnter Password</p>
            <input
              name="retyped password"
              type="password"
              value={ retypedPassword }
              onChange={ ({ target }) => handleRetypedPasswordChange(target.value)}
            />
          </div>
          <div>
            <button type="submit">SignUp</button>
          </div>
         </form>
      </div>
    );
}

export default SignUp;