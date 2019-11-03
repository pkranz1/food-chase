import React from 'react';
import SignUpForm from '../../components/SignUpForm';

class RestaurantSignUpPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {

      },
      restaurantInfo: {

      },
    }
    this.handleUserInfoChange = this.handleUserInfoChange.bind(this);
    this.handleRestaurantInfoChange = this.handleRestaurantInfoChange.bind(this);
  }

  handleUserInfoChange(event) {
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

  handleRestaurantInfoChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const restaurantInfo = this.state.restaurantInfo;

    this.setState({
      restaurantInfo: {
        ...restaurantInfo,
        [name]: value,
      }
    });
  }
  
  render() {
    console.log('user info:', this.state.userInfo);
    console.log('restaurant info:', this.state.restaurantInfo);
    return(
      <div className="row">
        <div className="col-sm-3 col-md-5 col-lg-6">
          <h1>Some text</h1>
          <h3>More text but smaller</h3>
        </div>

        <div className="col-sm-9 col-md-7 col-lg-6">
          <div className="card shadow rounded logged-out">
            <div className="card-body">
              <h5 className="card-title text-center">Restaurant Sign Up</h5>

              <form method="post">
                <SignUpForm 
                  handleChange={ this.handleUserInfoChange }
                />

                <hr/>
                <div className="form-group">
                  
                  <div className="form-group">
                    <label>Address</label>
                    <input
                      className="form-control"
                      name="address1"
                      type="text"
                      placeholder="5678 Some St"
                      onChange={ this.handleRestaurantInfoChange }
                    />
                  </div>

                  <div className="form-group">
                    <label>Address 2</label>
                    <input 
                      className="form-control"
                      name="address2"
                      type="text"
                      placeholder="floor"
                      onChange={ this.handleRestaurantInfoChange }
                    />
                  </div>

                  <div className="form-row">
                  
                    <div className="form-group col-sm-6">
                      <label>City</label>
                      <input
                        className="form-control"
                        name="city"
                        type="text"
                        placeholder="New York City"
                        onChange={ this.handleRestaurantInfoChange }
                      />
                    </div>

                    <div className="form-group col-sm-2">
                      <label>State</label>
                      <input
                        className="form-control"
                        name="state"
                        type="text"
                        placeholder="NY"
                        onChange={ this.handleRestaurantInfoChange }
                      />
                    </div>

                    <div className="form-group col-sm-4">
                      <label>Zip Code</label>
                      <input
                        className="form-control"
                        name="zip"
                        type="text"
                        placeholder="10001"
                        onChange={ this.handleRestaurantInfoChange }
                      />
                    </div>
                  </div>
                </div>
                <button className="btn" type="submit">Sign up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RestaurantSignUpPage;