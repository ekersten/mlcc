import React from 'react';

import { useLocation } from 'react-router-dom';

import SearchBar from '../components/SearchBar';
import Container from '../components/Container';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

const ResultsPage = () => {
    let query = useQuery();

    return (
        <>
            <SearchBar search={query.get('search')}/>
            <Container>
                <div className="row">
                    <div className="col-12">
                        <h1>Resultados</h1>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default ResultsPage;