import React from 'react';
import Header from './components/home/Header';
import SearchBar from './components/home/SearchBar';
import AvailablePets from './components/home/AvailablePets';
import WhyAdopt from './components/home/WhyAdopt';
import './App.css';  // Archivo CSS general opcional

const App = () => (
  <div className="App">
    <Header />
    <main>
      <SearchBar />
      <AvailablePets />
      <WhyAdopt />
    </main>
  </div>
);

export default App;
