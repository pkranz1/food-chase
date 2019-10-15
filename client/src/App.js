import React, { useState } from 'react';
import SignUp from './components/SignUp/SignUp';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link, 
} from 'react-router-dom';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [retypedPassword, setRetypedPassword] = useState('');

  return (
    <div>
      <Router>
        
      </Router>
    </div>
  );
}


export default App;
