import React from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from '../../components/SignUpForm';
import './CustomerSignUpPage.css';

class CustomerSignUpPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        email: '',
        password: '',
        retypedPassword: '',
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit() {

  }

  render() {
    console.log(this.state.userInfo);
    return(
      <div className="row justify-content-center">
        <div className="col-sm-3 col-md-5 col-lg-7 mt-5 mb-5 text-center">
          <h1>Some Big text</h1>
          <h3>Not as big text</h3>
        </div>

        <div className="col-sm-9 col-md-7 col-lg-5 mt-5 mb-5">
          <div className="card shadow rounded logged-out">
            <div className="card-body">
              <h5 className="card-title text-center">Customer Sign Up</h5>

              <form onSubmit={ this.handleSubmit } method="post">
                <SignUpForm 
                  handleChange={ this.handleChange }
                />
                <button className="btn" type="submit">Sign Up</button>
              </form>
              <div className="row text-center pt-4">
                <div className="col-sm-6">
                  <p>
                    <Link to="/signup/restaurant">Own a Restaurant?</Link>
                  </p>
                </div>
                <div className="col-sm-6">
                  <p>
                    <Link to="/login">Already a member?</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomerSignUpPage;