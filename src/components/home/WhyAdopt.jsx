import React from 'react';
import '../../assets/styles/home/WhyAdopt.css';

const WhyAdopt = () => (
  <section className="why-adopt">
    <h2>¿Por qué adoptar?</h2>
    <div className="benefits">
      <div className="benefit-card">
        <h3>Salvas una vida</h3>
        <p>Le das una segunda oportunidad a un animal necesitado.</p>
      </div>
      <div className="benefit-card">
        <h3>Compañía incondicional</h3>
        <p>Las mascotas ofrecen amor y lealtad sin condiciones.</p>
      </div>
      <div className="benefit-card">
        <h3>Mejora tu salud</h3>
        <p>Tener una mascota puede reducir el estrés y mejorar tu bienestar.</p>
      </div>
    </div>
  </section>
);

export default WhyAdopt;
