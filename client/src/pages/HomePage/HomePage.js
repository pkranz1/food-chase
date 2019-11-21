import React from 'react';
// How to apply css
import './HomePage.css'
// How to use images locally 
import PlatesImage1 from './plate1.jpg'
import PlatesImage2 from './plate2.jpg'
import PlatesImage3 from './plate3.jpg'

function HomePage(props) {
  return (
    <div className="homepage-title">
    	<h3>The best way to get great plates at a great price</h3>
    	<div>
    		<img className = "images" src={PlatesImage1} alt="plate"/>
    		<img className = "images" src={PlatesImage2} alt="plate"/>
    		<img className = "images" src={PlatesImage3} alt="plate"/>

    	</div>
    </div>
  );
}

export default HomePage;