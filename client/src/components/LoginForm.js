import React from 'react';

function LoginForm({ handleChange }) {
  return(
    <div className="form-group">
      <div className="form-group">
        <label>Email address</label>
        <input
          className="form-control"
          name="email"
          type="email"
          placeholder="doe@example.com"
          onChange={ handleChange }
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          className="form-control"
          name="password"
          type="password"
          placeholder="shh, it's a secret!"
          onChange={ handleChange }
        />
      </div>
    </div>
  );
}

export default LoginForm;