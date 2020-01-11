import React from 'react';
import { Helmet } from "react-helmet";

import SearchBar from '../components/SearchBar';

const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>Mercado Libre Challenge</title>
            </Helmet>
            <SearchBar/>
        </>
    )
}

export default HomePage;