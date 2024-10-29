import React, {useState} from 'react';
import { Search, Filter } from 'lucide-react';
import '../../styles/Cats/SearchFilter.css'

export default function SearchFilter({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        event.preventDefault(); 
        onSearch(searchTerm); 
    };

    return (
        <div style={styles.container}>
            <form onSubmit={handleSearch} style={styles.searchForm}>
                <input
                    type="text"
                    placeholder="Buscar gatos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={styles.input}
                />
                <button type="submit" style={styles.searchButton}>
                    <Search style={styles.icon} />
                </button>
            </form>
            <button style={styles.filterButton}>
                <Filter style={styles.icon} />
                
            </button>
        </div>
    );
}