import React from 'react';
import FileUploader from './FileUploader';

function MealPostForm({ handleChange, handleSubmit }) {
  return(
    <div className="col-sm-8 col-md-7 col-lg-6">
      <div className="card shadow rounded logged-in">
        <div className="card-body">
          <h3 className="card-title text-center">Create a new meal post</h3>
          <form method="post">
            <div className="form-group">
              <label>Dish Name</label>
                <input
                  className="form-control"
                  name="dishName"
                  type="text"
                  placeholder="Chicken Marsala"
                  onChange={ handleChange }
                />
              </div>
              <div className="form-group">
                <label>Dish Description</label>
                <textarea 
                  className="form-control" 
                  rows="3" type="text" 
                  name="description"
                  onChange={ handleChange }
                ></textarea>
              </div>
              <div className="form-row justify-content-center">
                <div className="form-group col-sm-10">
                  <label>Cuisine</label>
                    <select 
                      className="form-control" 
                      name="cuisine" 
                      onChange={ handleChange }
                      multiple
                    >
                      <option>American</option>
                      <option>Italian</option>
                      <option>Oriental</option>
                      <option>Hispanic</option>
                    </select>
                </div>
              <div className="form-group col-sm-2">
                <label>Quantity</label>
                <input
                  className="form-control"
                  name="quantity"
                  type="text"
                  placeholder="0"
                  onChange={ handleChange }
                />
              </div>
            </div>
            <div className="form-group">
              <div className="row">
                <FileUploader />
              </div>
            </div>  
            <button className="btn" type="submit">Post</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MealPostForm;