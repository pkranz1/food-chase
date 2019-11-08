import React from 'react';
import { Redirect } from 'react-router-dom';

import auth from '../../services/auth';
import SignUpForm from '../../components/SignUpForm';

import './CustomerSignUpPage.css';

class CustomerSignUpPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {

      },
      restaurantOwner: false,
      signUpFailed: false,
      redirectTo: false,
      passwordMatch: true,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }
  
  handleCheck() {
    const isChecked = this.state.restaurantOwner;
    this.setState({
      restaurantOwner: !isChecked,
    });
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

  handleSubmit(event) {
    event.preventDefault();

    const { email, password, retypedPassword } = this.state.userInfo;
    const restaurantOwner = this.state.restaurantOwner;

    if(password !== retypedPassword) {
      this.setState({ passwordMatch: false });
      return;
    }

    auth.signup(email, password, restaurantOwner)
      .then((user) => {
        console.log('user', user);
        this.setState({ redirectTo: true });
      })
      .catch((err) => {
        console.error(err);
        this.setState({ failed: true });
      });
  }

  render() {
    const { redirectTo, failed, passwordMatch, restaurantOwner } = this.state;
    let err = '';

    if(redirectTo && restaurantOwner) {
      return(<Redirect to="/restaurant/add-restaurant" />);
    }
    if(redirectTo && !restaurantOwner) {
      return(<Redirect to="meal-posts" />);
    }

    if(!passwordMatch) {
      err = <div className="alert alert-danger" role="alert">Passwords did not match</div>;
    }
    if(failed) {
      err = <div className="alert alert-danger" role="alert">Login Failed</div>
    }


    return(
      <div className="row justify-content-center">
        <div className="col-sm-3 col-md-5 col-lg-7 mt-5 mb-5 text-center">
          <h1>Easily the <strong>best</strong> decision you made today!</h1>
          <h3 className="mt-5">
            By Signing up with us you will get:
          </h3>
        </div>

        <div className="col-sm-9 col-md-7 col-lg-5 mt-5 mb-5">
          <div className="card shadow rounded logged-out">
            { err }
            <div className="card-body">
              <h5 className="card-title text-center">Sign Up</h5>

              <form onSubmit={ this.handleSubmit } method="post">
                <SignUpForm 
                  handleChange={ this.handleChange }
                />
                <button className="btn" type="submit">Sign Up</button>
                <div className="form-check">
                  <input
                    type="checkbox" 
                    className="form-check-input"
                    id="restaurantCheckbox"
                    onClick={ this.handleCheck }
                  />
                  <label className="form-check-label">Restaurant Owner</label>
                </div>
              </form>
              </div>
            </div>
          </div>
        </div>

    );
  }
}

export default CustomerSignUpPage;