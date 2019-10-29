import React from 'react';
import { Navlink } from 'react-router-dom';
import SignupForm from '../components/SignupForm';

class CustomerSignupPage extends React.Component {
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
      <div className="row">
      <div className="col-6">
        <h1>Wait...What am I signing up for?</h1>
        <h2>The hottest app in NYC. Get amazing meals for <strong>insanely </strong>
          cheap. So cheap these prices should be illegal. Seriously, keep it on the down-low
          we are not sure if this is legal. It must be though because we're saving the 
          enviornment! The enviornment? Oh yeah, <strong>the enviornment!!</strong>
        </h2>
      </div>
      <div className="col-6">
        <div className="card my-auto mx-auto rounded-lg shadow">
          <div className="card-body w-50">
            <h2 className="card-title">Customer Signup</h2>
            <form>
              <SignupForm
                email={ this.state.email }
                password={ this.state.password }
                retypedPassword={ this.state.retypedPassword }
                handleEmailChange={ this.handleEmailChange }
                handlePasswordchange={ this.handlePasswordChange }
                handleRetypedPassword={ this.handleRetypedPasswordChange }
              />
                <button className="btn btn-primary">Login</button>
            </form>
            <div className="btn-group" role="group">
              <button className="btn btn-secondary">Already a Member?</button>
              <button className="btn btn-secondary">Own a Resturant?</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
    
  }
}

export default CustomerSignupPage;