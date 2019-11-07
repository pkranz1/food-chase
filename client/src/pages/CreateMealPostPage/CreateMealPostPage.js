import React from 'react';
import MealPost from '../../components/MealPost';
import MealPostForm from '../../components/MealPostForm';


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
      pictures: [],
    }

    this.handleChange = this.handleChange.bind(this);
    this.handlePicture = this.handlePicture.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const post = this.state.post;

    this.setState({
      post: {
        ...post,
        [name]: value,
      }
    });
  }

  handlePicture(images) {
    this.setState({
      pictures: images.map(image => image.file),
    });
    console.log('pictures', this.state.pictures);
  }

  render() {
    console.log('post info', this.state.post)
    return(
      <div className="row">
        <MealPostForm
          handleChange={ this.handleChange }
          handlePicture={ this.handlePicture }
          pictures={ this.state.pictures }
        />
        <MealPost 
          post={ this.state.post }
        />
      </div>
    );
  }
}

export default CreateMealPostPage;