import React from 'react';
import MealPost from '../../components/MealPost';
import MealPostForm from '../../components/MealPostForm';
import FileUploader from '../../components/FileUploader';

class CreateMealPostPage extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      post: {
        dishName: null,
        description: null,
        cuisine: null,
        quantity: null,
      },
    }
  }

  render() {
    const dishName = this.state.post.dishName;
    const description = this.state.post.description
    const cuisine = this.state.post.cuisine;
    const quantity = this.state.post.quantity;
    
    return(
      <div className="row">
        <MealPostForm />
        <MealPost />
      </div>
    );
  }
}

export default CreateMealPostPage;