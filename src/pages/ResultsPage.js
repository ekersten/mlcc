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
    const [loading, setLoading] = useState(false)
    const query = useQuery();
    const searchTerm = query.get('search');

    useEffect(() => {
        if (searchTerm) {
            setLoading(true);
            axios.get(`/api/items?q=${searchTerm}&limit=4`)
                .then(response => {
                    setLoading(false);
                    setItems(response.data.items);
                })
                .catch(error => {
                    setLoading(false);
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
                            <>
                            { loading ? <p>Buscando <strong>"{searchTerm}"</strong>...</p> : <p>No se encontraron resultados.</p>}
                            </>
                            
                        )}
                    </div>
                </div>
            </Container>
        </>
    )
}

export default ResultsPage;