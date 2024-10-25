import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import NavbarDog from './components/adoptDogs/NavbarDog'
import Dogs from './components/adoptDogs/Dogs';


function App() {
 
    return (
      <div className="App">
        <section className='"container-md'>
          <Router>
            <Routes>
              <Route path="/" element={
        <div>
        <NavbarDog/>
        <Dogs/>
        
  
        </div>
              }/>
     
  
  </Routes>  
  </Router>    
        
        </section>
  
        
  
      </div>
      )
    }
  

export default App
