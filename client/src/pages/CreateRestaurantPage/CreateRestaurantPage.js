import React from 'react';
import RestaurantForm from '../../components/RestaurantForm';

class CreateRestaurantPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantInfo: {

      }
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const restaurantInfo = this.state.restaurantInfo;

    this.setState({
      restaurantInfo: {
        ...restaurantInfo,
        [name]: value,
      }
    });
  }
  render() {
    console.log('restaurant info:', this.state.restaurantInfo);
    return(
      <div className="row justify-content-center">
        <div className="col-md-12 mt-5 mb-5">
          <div className="card shadow rounded logged-in">
            <div className="card-body">
              <h5 className="card-title text-center">Add Restaurant</h5>
              <form method="post">
                <RestaurantForm 
                  handleChange={ this.handleChange }
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateRestaurantPage;