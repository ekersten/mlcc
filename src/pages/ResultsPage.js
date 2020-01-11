import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import SearchBar from '../components/SearchBar';
import Container from '../components/Container';
import Breadcrumbs from '../components/Breadcrumbs';
import ResultsList from '../components/ResultsList';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

const ResultsPage = () => {
    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState([]);
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
                    setCategories(response.data.categories);
                })
                .catch(error => {
                    setLoading(false);
                    console.log(error);
                })
        }
    }, [searchTerm]);



    return (
        <>
            <Helmet>
                <title>Mercado Libre - Resultados para "{searchTerm}"</title>
            </Helmet>
            <SearchBar search={searchTerm}/>
            <Breadcrumbs items={categories}/>
            <Container>
                <div className="row">
                    <div className="col-12">
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