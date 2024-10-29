import React from 'react';
import '../../assets/styles/home/SearchBar.css';

const SearchBar = () => (
  <div className="search-bar">
    <h2>Encuentra a tu compañero perfecto</h2>
    <p>Adopta un perro o gato y cambia una vida para siempre</p>
    <div className="search-box">
      <input type="text" placeholder="Buscar mascotas..." />
      <button>🔍</button>
    </div>
  </div>
);

export default SearchBar;
