import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import SearchBar from '../components/SearchBar';
import Container from '../components/Container';
import ResultsList from '../components/ResultsList';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

const ResultsPage = () => {
    const [items, setItems] = useState([]);
    const query = useQuery();
    const searchTerm = query.get('search');

    useEffect(() => {
        if (searchTerm) {
            axios.get(`/api/items?q=${searchTerm}&limit=4`)
                .then(response => {
                    setItems(response.data.items);
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }, [searchTerm]);



    return (
        <>
            <SearchBar search={searchTerm}/>
            <Container>
                <div className="row">
                    <div className="col-12">
                        <h1>Resultados</h1>
                        {items.length > 0 ? (
                            <ResultsList items={items}/>
                        ) : (
                            <p>No se encontraron resultados.</p>
                        )}
                    </div>
                </div>
            </Container>
        </>
    )
}

export default ResultsPage;