import { useState, useEffect } from 'react';
import CatCard from '../../components/Cats/CatCard';
import CatModal from '../../components/Cats/CatModal';
import SearchFilter from '../../components/Cats/SearchFilter';
import '../../styles/Cats/CatList.css'

export default function CatsList() {
    const [cats, setCats] = useState([]);
    const [originalCats, setOriginalCats] = useState([]);
    const [selectedCat, setSelectedCat] = useState(null);

    useEffect(() => {
        const fetchCats = async () => {
            try {
                const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=100'); 
                const data = await response.json();
                setCats(data);
            } catch (error) {
                console.error("Error al cargar los gatos:", error);
            }
        };
        fetchCats();
    }, []);

    const handleSearch = (term) => {
        const filteredCats = originalCats.filter(cat => 
            cat.name.toLowerCase().includes(term.toLowerCase())
        );
        setCats(filteredCats);
    };

    return (
        <div className="container">
            <main>
                <h2>GATOS EN ADOPCIÓN</h2>
                <SearchFilter />
                <div className="grid">
                    {cats.map((cat) => (
                        <CatCard key={cat.id} cat={cat} onClick={() => setSelectedCat(cat)} />
                    ))}
                </div>
            </main>
            {selectedCat && (
                <CatModal cat={selectedCat} onClose={() => setSelectedCat(null)} />
            )}
        </div>
    );
}