import React from 'react';

function LoginForm({ email, password, handleEmailChange, handlePasswordChange }) {
  return(
    <div className="container-fluid">
      <div className="form-group">
        <label>Email address</label>
        <input
          className="form-control w-50"
          name="email"
          type="email"
          placeholder="doe@example.com"
          value={ email }
          onChange={ ({ target }) => handleEmailChange(target.value)}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          className="form-control w-50"
          name="password"
          type="password"
          placeholder="password"
          value={ password }
          onChange={ ({ target }) => handlePasswordChange(target.value) }
        />
      </div>
    </div>
  );
}

export default LoginForm;