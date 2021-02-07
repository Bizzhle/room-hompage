import React from 'react';
import Home from "./components/Home.js"
import {Images} from "./components/Images"
import './App.css';

function App() {
  return (
    <Home slides={Images}/>
  );
}

export default App;
