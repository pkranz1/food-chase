import React from 'react';

function RestaurantForm ({ handleChange }) {
  return(
    <div className="form-group">
      <div className="form-group">
        <label>Address</label>
          <input
            className="form-control"
            name="address1"
            type="text"
            placeholder="5678 Some St"
            onChange={ handleChange }
          />
      </div>
      <div className="form-group">
        <label>Address 2</label>
          <input 
            className="form-control"
            name="address2"
            type="text"
            placeholder="floor"
            onChange={ handleChange }
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
              onChange={ handleChange }
            />
        </div>
        <div className="form-group col-sm-2">
          <label>State</label>
            <input
              className="form-control"
              name="state"
              type="text"
              placeholder="NY"
              onChange={ handleChange }
            />
        </div>
        <div className="form-group col-sm-4">
          <label>Zip Code</label>
            <input
              className="form-control"
              name="zip"
              type="text"
              placeholder="10001"
              onChange={ handleChange }
            />
        </div>
      </div>
    </div>
  );
}

export default RestaurantForm;