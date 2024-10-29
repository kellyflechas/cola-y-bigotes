import React, { useEffect, useState } from 'react';
import axios from "./Axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dogs.css';

const ApiDogs = () => {
  const [dogData, setDogData] = useState(null);

  // Función para obtener datos de perros
  const fetchDogData = () => {
    axios
      .get("https://api.thedogapi.com/v1/images/search?limit=10")
      .then((response) => setDogData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
     
  };

  useEffect(() => {
    fetchDogData();
  }, []);

  // Función para refrescar las imágenes al hacer clic en el botón
  const handleOnClick = (e) => {
    e.preventDefault();
    fetchDogData();
  };

  // Función para agregar una imagen de perro a favoritos
  const onClickAdd = (event, dogId) => {
    event.preventDefault();

    const dogAddFavoriteOptions = {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "apiKey",
      },
    };
    const data = {
      image_id: dogId,
      sub_id: "my-user-1",
    };

    
  };

  return (
    <section className="main-container">
      <div className="image-grid">
        {dogData?.slice(0, 4).map((dog) => (
          <div key={dog.id} className="image-button-pair">
            <img className="grid-image" src={dog.url} alt="Dog" />
            <button
              className="grid-button"
              onClick={(event) => onClickAdd(event, dog.id)}
            >
              <span className="material-symbols-outlined">favorite</span>
            </button>
          </div>
        ))}
      </div>

      <div className="main-container-description">
        
        
        <button className="main-container-button" onClick={handleOnClick}>
          Randomize
        </button>
      </div>
    </section>
  );
};

export default ApiDogs;