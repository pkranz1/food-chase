import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './SignUp.css';

const SignUp = ({ username, password, retypedPassword, 
  handleUsernameChange, handlePasswordChange, handleRetypedPasswordChange }) => {
    return (
      <div class="container justify-content-center sign-up-form">
        <h2 class="text-center">SignUp</h2>
        <Form>
          <Form.Group>
            <Form.Label>username:</Form.Label>
            <Form.Control
              name="username"
              type="text"
              placeholder="username"
              value={ username }
              onChange={ ({ target }) => handleUsernameChange(target.value) }
            />
            <Form.Label>password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="password"
              value={ password }
              onChange={ ({ target }) => handlePasswordChange(target.value) }
            />
            <Form.Label>re-enter password</Form.Label>
            <Form.Control
              name="reEnter password"
              type="password"
              placeholder="re-enter password"
              value={ retypedPassword }
              onChange={ ({ target }) => handleRetypedPasswordChange(target.value)}
            />
            <Button variant="primary" type="submit">Sign-up</Button>
            </Form.Group>
        </Form>
      </div>
    );
}
export default SignUp;