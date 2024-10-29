import React from 'react';
import '../../assets/styles/home/Header.css';
import logo from '../../assets/logo.png';

const Header = () => (
  <header className="header">
    <div className="logo">
      <img src={logo} alt="Cola y bigotes Logo" />
    </div>
    <nav>
      <a href="#perros">Perros</a>
      <a href="#gatos">Gatos</a>
      <a href="#sobre-nosotros">Sobre nosotros</a>
    </nav>
  </header>
);

export default Header;
