import { useState } from 'react';
import Home from './components/home/Home';
import Dogs from './components/Dogs';
import Cats from './components/Cats';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/home/styles.css';
import Header from './components/home/Header'; 

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
      <Header /> 
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
