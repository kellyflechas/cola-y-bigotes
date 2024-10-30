import { useState, useEffect } from 'react';
import { Button, Form, InputGroup, Modal } from 'react-bootstrap';

const Cats = () => {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCat, setSelectedCat] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const response = await fetch('https://api.thecatapi.com/v1/breeds?limit=24', {
          headers: {
            'x-api-key': 'live_I1GFDiJynVmnHPZlXoVvaUWOq4OSNPvEzjcoSlBTmmNdnuzv10ofCx9ceawwJrtj'
          }
        });
        if (!response.ok) throw new Error('Error al cargar los gatos');
        
        const data = await response.json();
        const processedCats = data.map(cat => ({
          id: cat.id,
          name: cat.name.split(' ')[0],
          breed: cat.name,
          age: Math.floor(Math.random() * 10) + 1,
          size: cat.weight.metric > 5 ? 'Grande' : 'Pequeño',
          image: cat.image?.url || `https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`,
          temperament: cat.temperament || 'Amigable',
          life_span: cat.life_span,
          weight: cat.weight.metric,
          origin: cat.origin || 'Desconocido',
          description: cat.description || `${cat.name} es un gato maravilloso`
        }));

        setCats(processedCats);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCats();
  }, []);

  const filteredCats = cats.filter(cat =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cat.breed.toLowerCase().includes(searchTerm.toLowerCase())
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
      <h1 className="text-info mb-4">Gatos disponibles para adopción</h1>
      
      <div className="d-flex justify-content-between align-items-center mb-4 w-75">
        <InputGroup className="w-50">
          <Form.Control
            placeholder="Buscar gatos..."
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
        {filteredCats.map(cat => (
          <div key={cat.id} className="col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 border-0 overflow-hidden">
              <div style={{ height: '250px', overflow: 'hidden' }}>
                <img 
                  src={cat.image} 
                  alt={cat.breed}
                  className="w-100 h-100"
                  style={{ objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/placeholder-cat.jpg';
                  }}
                />
              </div>
              <div className="card-body" style={{ backgroundColor: '#5CD2C6' }}>
                <h3 className="text-white mb-2">{cat.name}</h3>
                <div className="text-white mb-1">Raza: {cat.breed}</div>
                <div className="text-white mb-1">Edad: {cat.age} años</div>
                <div className="text-white mb-3">Tamaño: {cat.size}</div>
                <Button 
                  variant="light" 
                  className="w-100"
                  onClick={() => {
                    setSelectedCat(cat);
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
        {selectedCat && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedCat.name} - {selectedCat.breed}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="row">
                <div className="col-md-6">
                  <img 
                    src={selectedCat.image} 
                    alt={selectedCat.breed}
                    className="w-100 mb-3 rounded"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/placeholder-cat.jpg';
                    }}
                  />
                </div>
                <div className="col-md-6">
                  <h4 className="mb-4">Detalles</h4>
                  <div className="mb-3">
                    <strong>Edad:</strong> {selectedCat.age} años
                  </div>
                  <div className="mb-3">
                    <strong>Tamaño:</strong> {selectedCat.size}
                  </div>
                  <div className="mb-3">
                    <strong>Peso:</strong> {selectedCat.weight} kg
                  </div>
                  <div className="mb-3">
                    <strong>Esperanza de vida:</strong> {selectedCat.life_span}
                  </div>
                  <div className="mb-3">
                    <strong>Origen:</strong> {selectedCat.origin}
                  </div>
                  <div className="mb-3">
                    <strong>Temperamento:</strong> {selectedCat.temperament}
                  </div>
                  <p className="mt-3">{selectedCat.description}</p>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="info" size="lg" className="w-100">
                Adoptar a {selectedCat.name}
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </div>
  );
};

export default Cats;