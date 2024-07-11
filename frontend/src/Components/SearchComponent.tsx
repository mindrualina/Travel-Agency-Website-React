import React, { useState, FormEvent, ChangeEvent } from 'react';
import { useNavigate} from 'react-router-dom';
import { Pages } from './router';

const SearchComponent: React.FC = () => {
    const handleNavigate = (path: string) => {
        navigate(path);
    };
    const [searchTerm, setSearchTerm] = useState<string>('');
    const navigate = useNavigate();

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const searchPath = `${Pages.Search}?query=${encodeURIComponent(searchTerm)}`;
        handleNavigate(searchPath);
    };


    return (
        <form onSubmit={handleSearchSubmit} className="search-form">
            <input
                type="text"
                placeholder="Search destination..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-input"
            />
            <button type="submit" className="search-button">Search</button>
        </form>
    );
};

export default SearchComponent;
