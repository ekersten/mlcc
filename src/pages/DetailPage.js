import React from 'react';

import SearchBar from '../components/SearchBar';
import Container from '../components/Container';

const DetailPage = () => {
    return (
        <>
            <SearchBar />
            <Container>
                <div className="row">
                    <div className="col-12">
                        <h1>Detalle</h1>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default DetailPage;