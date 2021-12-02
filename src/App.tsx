/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";
import './App.css';
import Register from './components/Register';

const App =() => {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Register />
    </div>
  );
}

export default App;
