import React from 'react';
import LoginForm from '../../components/LoginForm';
import './LoginPage.css';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        email: '',
        password: '',
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
        <div className="col-sm-3 col-md-5 col-lg-7">
          <h1>Some Big text</h1>
          <h3>Not as big but still pretty big text</h3>
        </div>

        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card shadow rounded logged-out">
            <div className="card-body">
            <h5 className="card-title text-center">Sign In</h5>

              <form onSubmit={ this.handleSubmit } method="post">
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