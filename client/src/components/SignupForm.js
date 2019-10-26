import React from 'react';
import LoginForm from './LoginForm';

function SignupForm({ email, password, retypedPassword, 
  handleEmailChange, handlePasswordchange, handleRetypedPassword }) {
  
  return(
    <div className="container-fluid">
      <LoginForm 
        email={ email }
        password={ password }
        handleEmailChange={ handleEmailChange }
        handlePasswordchange={ handlePasswordchange }
      />
      <div className="form-group">
        <label>Retype password</label>
        <input
          className="form-control w-50"
          name="retyped-password"
          type="password"
          placeholder="password"
          value={ retypedPassword }
          onChange={ ({ target }) => handleRetypedPassword(target.value) }
        /> 
      </div>
    </div>
  );
}

export default SignupForm;