import React from 'react';

function MealPost({ post }) {
  return(
    <div className="col-sm-4 col-md-5 col-lg-6 text-center">
      <h1>The Post</h1>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h2>{ post.dishName} </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <img alt={`${ post.dishName }`}>{ /*Image of the food*/ }</img>
          </div>
          <div className="col-sm-6">
            <p>{ post.description }</p>
          </div>
          <div className="col-sm-3">
            <p>{ post.cuisine }</p>
            <p>{ post.quantity }</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MealPost;