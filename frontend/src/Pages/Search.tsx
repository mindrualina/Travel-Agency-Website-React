import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios'

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import {Destination} from "../Models/Users";
import { useSearchParams } from 'react-router-dom';


import '../style.css';

interface Result {
    id: number;
    title: string;
    description: string;
    image: string;
    pricePerNight: number;
}


const Search = () => {
    const [results, setResults] = useState<Result[]>([]);  // Inițializarea cu un array gol
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const query = searchParams.get('query'); // Extract the search term from the URL
        if (query) {

            fetch(`http://localhost:8080/Destination/SearchDestinations?query=${encodeURIComponent(query)}`)
                .then(response => {
                    if (!response.ok && response.status !== 204) {
                        throw new Error(`HTTP status ${response.status}`);
                    }
                    return response.status === 204 ? [] : response.json();
                })
                .then(data => {
                    setLoading(false);
                    if (data.length === 0) {
                        setError('No destination found matching your search.');
                        setResults([]);
                    } else {
                        setResults(data);
                        setError('');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    setError('Failed to load data. Please try again later.');
                    setLoading(false);
                });

        } else {
                    setLoading(false);
                    setResults([]);
                    setError(''); // Clear any error message when the query is empty
                }
            }, [searchParams]);

    return (
        <div>
            <Header/>
            <div className="main-content">
                {loading ? <p>Loading...</p> : error ? <p>{error}</p> : results.map((result) => (
                    <div key={result.id} className="destination-item">
                        <h3>{result.title}</h3>
                        <p>{result.description}</p>
                        <img src={require(`../images/${result.image}`)} alt="Paris" className="destination-image"/>
                        <span className="price">From {result.pricePerNight}$/night</span>
                    </div>
                ))}

            </div>
            <Footer/>
        </div>
    );
};

export default Search;