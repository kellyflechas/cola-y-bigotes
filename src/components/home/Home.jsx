import { Button, Form, InputGroup } from 'react-bootstrap';
import { Heart } from 'react-bootstrap-icons';

const Home = ({ onViewChange }) => {
  return (
    <div className="container">
      
      <header className="text-center my-5">
        <h1 className="display-4 fw-bold mb-3" style={{ color: '#5CD2C6' }}>
          Encuentra a tu compañero perfecto
        </h1>
        <p className="text-muted mb-4">
          Adopta un perro o gato y cambia una vida para siempre
        </p>
        <InputGroup className="mb-5 mx-auto" style={{ maxWidth: '600px' }}>
          <Form.Control
            placeholder="Buscar mascotas..."
            className="py-2 border-end-0"
            style={{ borderColor: '#5CD2C6' }}
          />
          <Button 
            style={{ backgroundColor: '#5CD2C6', borderColor: '#5CD2C6' }}
          >
            Buscar
          </Button>
        </InputGroup>
      </header>

      {/* Seccion de mascotas */}
      <section className="row g-4 mb-5">
        <div className="col-md-6">
          <div className="card border-0 h-100" style={{ backgroundColor: '#FFA726' }}>
            <div className="card-body p-4">
              <h2 className="text-white mb-3">Perros disponibles</h2>
              <p className="text-white mb-4">
                Descubre a nuestros adorables perros esperando un hogar.
              </p>
              <Button 
                variant="light"
                onClick={() => onViewChange('dogs')}
              >
                Ver perros
              </Button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card border-0 h-100" style={{ backgroundColor: '#5CD2C6' }}>
            <div className="card-body p-4">
              <h2 className="text-white mb-3">Gatos disponibles</h2>
              <p className="text-white mb-4">
                Explora nuestra selección de gatos buscando una familia.
              </p>
              <Button 
                variant="light"
                onClick={() => onViewChange('cats')}
              >
                Ver gatos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Seccion de adopcion */}
      <section className="text-center mb-5">
        <h2 className="mb-5" style={{ color: '#5CD2C6' }}>¿Por qué adoptar?</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card border-0 h-100" style={{ backgroundColor: '#FFA726' }}>
              <div className="card-body p-4 text-white">
                <Heart size={40} className="mb-3" />
                <h3 className="mb-3">Salvas una vida</h3>
                <p className="mb-0">
                  Al adoptar, le das una segunda oportunidad a un animal necesitado.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 h-100" style={{ backgroundColor: '#8DE3DB' }}>
              <div className="card-body p-4 text-white">
                <Heart size={40} className="mb-3" />
                <h3 className="mb-3">Compañía incondicional</h3>
                <p className="mb-0">
                  Las mascotas ofrecen amor y lealtad sin condiciones.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 h-100" style={{ backgroundColor: '#5CD2C6' }}>
              <div className="card-body p-4 text-white">
                <Heart size={40} className="mb-3" />
                <h3 className="mb-3">Mejora tu salud</h3>
                <p className="mb-0">
                  Tener una mascota puede reducir el estrés y mejorar tu bienestar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
