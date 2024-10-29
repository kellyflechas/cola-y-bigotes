import React from 'react';
import '../../styles/Cats/CatCard.css'

export default function CatCard({ cat, onClick }) {
    return (
        <div className="cat-card" onClick={onClick}>
            <img
                src={cat.url}
                alt={cat.breeds?.[0]?.name || "Gato"}
                className="cat-image"
            />
            <div className="cat-details">
                <h3 className="cat-name">{cat.breeds?.[0]?.name || "Gato"}</h3>
                <p>Raza: {cat.breeds?.[0]?.name || "No especificada"}</p>
                <p>Edad: {cat.breeds?.[0]?.age || "Edad no especificada"}</p>
                <p>Tamaño: {cat.breeds?.[0]?.size || "Tamaño no especificado"}</p>
                <button className="details-button">Ver detalles</button>
            </div>
        </div>
    );
}