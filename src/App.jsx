import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarDog from './components/adoptDogs/HeaderDogs';
import ApiDogs from './components/adoptDogs/ApiDogs';
import SearchDogs from './components/adoptDogs/SearchDogs';

 
function App() {
 
    return (
      <div className="App">
        <section className='"container-md'>
          <Router>
            <Routes>
              <Route path="/" element={
        <div>
        <NavbarDog/>
        <SearchDogs/>
        <ApiDogs/>
       
  
        </div>
              }/>
     
  
  </Routes>  
  </Router>    
        
        </section>
  
        
  
      </div>
      )
    }
  

export default App
