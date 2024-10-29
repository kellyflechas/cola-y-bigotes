import React from 'react';
import '../../styles/Cats/CatModal.css'

export default function CatModal({ cat, onClose }) {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button
                    onClick={onClose}
                    className="modal-close-button"
                >
                    ×
                </button>

                <img 
                    src={cat.url} 
                    alt={cat.breeds?.[0]?.name || "Gato"} 
                    className="modal-image" 
                />
                <div className="modal-details">
                    <h2>{cat.breeds?.[0]?.name || "Gato"}</h2>
                    <p>Raza: {cat.breeds?.[0]?.name || "No especificada"}</p>
                    <p>Edad: {cat.breeds?.[0]?.age || "Edad no especificada"}</p>
                    <p>Tamaño: {cat.breeds?.[0]?.size || "Tamaño no especificado"}</p>
                    <p>Descripción: {cat.breeds?.[0]?.description || "No disponible"}</p>
                    <p>Temperamento: {cat.breeds?.[0]?.temperament || "No disponible"}</p>
                </div>
            </div>
        </div>
    );
}