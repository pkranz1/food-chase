import React, { useState } from 'react';
import SignUp from './components/SignUp/SignUp';
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
    <SignUp
      
    />
  );
}


export default App;
