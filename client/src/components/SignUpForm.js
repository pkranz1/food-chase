import React from 'react';
import LoginForm from './LoginForm';

function SignUpForm({ handleChange }) {
  return(
    <div className="form-group">
      <LoginForm 
        handleChange={ handleChange }
      />
      <div className="form-group">
        <label>Retyped Password</label>
        <input
          className="form-control"
          name="retypedPassword"
          type="password"
          placeholder="one more time"
          onChange={ handleChange }
        />
      </div>
    </div>
  );
}

export default SignUpForm;