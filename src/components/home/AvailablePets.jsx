import React from 'react';
import '../../assets/styles/home/AvailablePets.css';

const AvailablePets = () => (
  <section className="available-pets">
    <div className="pet-card dog">
      <h3>Perros disponibles</h3>
      <p>Descubre a nuestros adorables perros esperando un hogar.</p>
      <button>Ver perros</button>
    </div>
    <div className="pet-card cat">
      <h3>Gatos disponibles</h3>
      <p>Explora nuestra selección de gatos buscando una familia.</p>
      <button>Ver gatos</button>
    </div>
  </section>
);

export default AvailablePets;
