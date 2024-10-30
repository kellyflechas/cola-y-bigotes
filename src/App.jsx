import { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Home from './components/home/Home';
import Dogs from './components/Dogs';
import Cats from './components/Cats';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/home/styles.css';

const App = () => {
  const [currentView, setCurrentView] = useState('home');

  const renderView = () => {
    switch(currentView) {
      case 'dogs':
        return <Dogs />;
      case 'cats':
        return <Cats />;
      default:
        return <Home onViewChange={setCurrentView} />;
    }
  };

  return (
    <div className="min-vh-100 d-flex flex-column">
      <Navbar expand="lg" className="bg-white py-3">
        <div className="container-fluid px-4">
          <Navbar.Brand href="#" className="d-flex align-items-center">
            <div className="brand-text">
              
            </div>
            <img 
              src="./assets/logo.png" 
              alt="Logo"
              className="ms-2"
              style={{ width: '30px', height: '30px' }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link 
                onClick={() => setCurrentView('home')}
                className="nav-link-custom"
              >
                Inicio
              </Nav.Link>
              <Nav.Link 
                onClick={() => setCurrentView('dogs')}
                className="nav-link-custom"
              >
                Perros
              </Nav.Link>
              <Nav.Link 
                onClick={() => setCurrentView('cats')}
                className="nav-link-custom"
              >
                Gatos
              </Nav.Link>
              <Nav.Link 
                href="#about"
                className="nav-link-custom"
              >
                Sobre nosotros
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

      <main className="flex-grow-1">
        {renderView()}
      </main>

      <footer className="py-3 text-center" style={{ backgroundColor: '#5CD2C6' }}>
        <span className="text-white">
          © 2024 Cola y Bigotes. Todos los derechos reservados.
        </span>
      </footer>
    </div>
  );
};

export default App;
