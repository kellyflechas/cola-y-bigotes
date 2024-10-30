import { useState, useEffect } from 'react';
import { Button, Form, InputGroup, Modal } from 'react-bootstrap';

const Dogs = () => {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDog, setSelectedDog] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const response = await fetch('https://api.thedogapi.com/v1/breeds?limit=24', {
          headers: {
            'x-api-key': 'live_Iio0KwNN2QxkYqHLTnOfDLVIGixbbRaOfAXeG30Cvo636c2gisOv8J5UzdVZ2ozn'
          }
        });
        if (!response.ok) throw new Error('Error al cargar los perros');
        
        const data = await response.json();
        const processedDogs = data.map(dog => ({
          id: dog.id,
          name: dog.name.split(' ')[0],
          breed: dog.name,
          age: Math.floor(Math.random() * 10) + 1,
          size: dog.height.metric > 50 ? 'Grande' : 'Pequeño',
          image: dog.image?.url || `https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`,
          temperament: dog.temperament || 'Amigable',
          life_span: dog.life_span,
          weight: dog.weight.metric,
          origin: dog.origin || 'Desconocido',
          description: `${dog.name} es un perro ${dog.bred_for ? `criado para ${dog.bred_for}` : 'maravilloso'}`
        }));

        setDogs(processedDogs);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDogs();
  }, []);

  const filteredDogs = dogs.filter(dog =>
    dog.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dog.breed.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="w-100 h-100 d-flex justify-content-center align-items-center py-5">
        <div className="spinner-border text-info" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-100 text-center py-5 text-danger">
        <h3>Error: {error}</h3>
        <Button variant="info" onClick={() => window.location.reload()}>
          Reintentar
        </Button>
      </div>
    );
  }

  return (
    <div className="w-100 px-3 py-4 d-flex flex-column align-items-center">
      <h1 className="text-info mb-4">Perros disponibles para adopción</h1>
      
      <div className="d-flex justify-content-between align-items-center mb-4 w-75">
        <InputGroup className="w-50">
          <Form.Control
            placeholder="Buscar perros..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button variant="info">
            <i className="bi bi-search"></i>
          </Button>
        </InputGroup>
        <Button variant="warning">
          <i className="bi bi-funnel"></i> Filtrar
        </Button>
      </div>

      <div className="row g-4 justify-content-center w-100">
        {filteredDogs.map(dog => (
          <div key={dog.id} className="col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 border-0 overflow-hidden">
              <div style={{ height: '250px', overflow: 'hidden' }}>
                <img 
                  src={dog.image} 
                  alt={dog.breed}
                  className="w-100 h-100"
                  style={{ objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/placeholder-dog.jpg';
                  }}
                />
              </div>
              <div className="card-body" style={{ backgroundColor: '#5CD2C6' }}>
                <h3 className="text-white mb-2">{dog.name}</h3>
                <div className="text-white mb-1">Raza: {dog.breed}</div>
                <div className="text-white mb-1">Edad: {dog.age} años</div>
                <div className="text-white mb-3">Tamaño: {dog.size}</div>
                <Button 
                  variant="light" 
                  className="w-100"
                  onClick={() => {
                    setSelectedDog(dog);
                    setShowModal(true);
                  }}
                >
                  Ver detalles
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal 
        show={showModal} 
        onHide={() => setShowModal(false)} 
        size="lg"
        centered
      >
        {selectedDog && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedDog.name} - {selectedDog.breed}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="row">
                <div className="col-md-6">
                  <img 
                    src={selectedDog.image} 
                    alt={selectedDog.breed}
                    className="w-100 mb-3 rounded"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/placeholder-dog.jpg';
                    }}
                  />
                </div>
                <div className="col-md-6">
                  <h4 className="mb-4">Detalles</h4>
                  <div className="mb-3">
                    <strong>Edad:</strong> {selectedDog.age} años
                  </div>
                  <div className="mb-3">
                    <strong>Tamaño:</strong> {selectedDog.size}
                  </div>
                  <div className="mb-3">
                    <strong>Peso:</strong> {selectedDog.weight} kg
                  </div>
                  <div className="mb-3">
                    <strong>Esperanza de vida:</strong> {selectedDog.life_span}
                  </div>
                  <div className="mb-3">
                    <strong>Origen:</strong> {selectedDog.origin}
                  </div>
                  <div className="mb-3">
                    <strong>Temperamento:</strong> {selectedDog.temperament}
                  </div>
                  <p className="mt-3">{selectedDog.description}</p>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="info" size="lg" className="w-100">
                Adoptar a {selectedDog.name}
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </div>
  );
};

export default Dogs;