import React from 'react';
import { Redirect } from 'react-router-dom';

import auth from '../../services/auth';
import LoginForm from '../../components/LoginForm';
import './LoginPage.css';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        email: '',
        password: '',
      },
      loginFailed: false,
      redirectTo: false,

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const userInfo = this.state.userInfo;

    this.setState({
      userInfo: {
        ...userInfo,
        [name]: value,
      }
    });
  }

  handleLogin(event) {
    event.preventDefault();
    const { email, password } = this.state.userInfo;
    
    console.log('email:', email, 'password:', password);
    
    auth.authenticate(email, password)
    .then((user) => {
      console.log('user:', user);
      this.setState({ redirectTo: true });
    })
    .catch((err) => {
      this.setState({ failed: true });
    });
  }

  render() {
    console.log(this.state.userInfo);
    const { redirectTo, failed } = this.state;
    let err = '';

    if(redirectTo) {
      return(<Redirect to="/" />);
    }

    if(failed) {
      err = <div className="alert alert-danger" role="alert">Login Failed</div>;
    }
    
    return(
      <div className="row justify-content-center">
        <div className="col-sm-3 col-md-5 col-lg-7 mt-5 mb-5 text-center">
          <h1>Some Big text</h1>
          <h3>Not as big but still pretty big text</h3>
        </div>

        <div className="col-sm-9 col-md-7 col-lg-5 mt-5 mb-5 ">
          <div className="card shadow rounded logged-out">
            { err }
            <div className="card-body">
            <h5 className="card-title text-center">Sign In</h5>

              <form onSubmit={ this.handleLogin } method="post">
                <LoginForm 
                handleChange={ this.handleChange }
                />
                <button className="btn" type="submit">Login</button>
              </form>

            </div>
          </div>
        </div>
      </div>
    );
  }

}
export default LoginPage;