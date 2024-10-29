
import React from 'react';

const SearchDogs = ({ setQuery }) => {
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="main-container-text">
        <h2 className="main-container-title">Perros buscando un hogar</h2>
    <input 
      type="text" 
      placeholder="Buscar perro..." 
      onChange={handleInputChange} 
      className="search-input"
    />
    </div>
  );
};

export default SearchDogs;