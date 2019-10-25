import React from 'react';
import LoginForm from '../components/LoginForm';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      retypedPassword: '',
      sucessfulLogin: null,
    }
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleRetypedPasswordChange = this.handleRetypedPasswordChange.bind(this);
  }

  handleEmailChange(email) {
    this.setState({
      email,
    });
  }

  handlePasswordChange(password) {
    this.setState({
      password,
    });
  }

  handleRetypedPasswordChange(retypedPassword) {
    this.setState({
      retypedPassword,
    });
  }

  render() {
    return(
      <div className="container card w-50 p-3 my-auto mx-auto rounded-lg shadow">
        <div className="card-body">
          <h2 className="card-title text-center">Login</h2>
          <form>
            <LoginForm
              email={ this.state.email }
              password={ this.state.password }
              handleEmailChange={ this.handleEmailChange }
              handlePasswordChange={ this.handlePasswordChange }
            />
            <div className={ `form-group ${ this.props.hide }` }>
              <label>Retype Password</label>
              <input 
                className="form-control w-50"
                name="retype-password"
                type="password"
                value={ this.state.retypedPassword }
                onChange= { ({ target }) => this.handleRetypedPasswordChange(target.value) }
              />
            </div>
            <button className="btn btn-primary">{ this.props.buttonText }</button>
            </form>
            <div className={ `btn-group ${ this.props.hide }` } role="group">
              <button className="btn btn-secondary">Already a Member?</button>
              <button className="btn btn-secondary">Own a Resturant?</button>
            </div>
          </div>
      </div>
    );
    
  }
}

export default LoginPage;