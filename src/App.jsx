import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import CatsList from '../src/components/Cats/CatList';
// import NavbarDog from './components/adoptDogs/NavbarDog'
// import Dogs from './components/adoptDogs/Dogs';


function App() {

    return (
      <div>
        <CatsList/>
      </div>
    )

    }
  

export default App
