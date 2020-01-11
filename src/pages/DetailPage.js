import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import SearchBar from '../components/SearchBar';
import Container from '../components/Container';
import Breadcrumbs from '../components/Breadcrumbs';

const DetailPage = () => {
    const [item, setItem] = useState(null);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false)
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            setLoading(true);
            axios.get(`/api/items/${id}`)
                .then(response => {
                    setLoading(false);
                    setItem(response.data.item);
                    setCategories(response.data.item.category.path_from_root.map(category => category.name))
                })
                .catch(error => {
                    setLoading(false);
                    console.log(error);
                })
        }
    }, [id]);

    return (
        <>
            <SearchBar />
            <Breadcrumbs items={categories} />
            <Container>
                <div className="row">
                    <div className="col-12">
                        <h4>Detalle {id}</h4>
                        {loading ? <p>Cargando...</p> : null}
                        {item ? (
                            <>
                                <h1>{item.title} (${item.price.amount},{item.price.decimals} {item.price.currency.toUpperCase()})</h1>
                                <p>{item.description}</p>
                            </>
                        ) : null}
                    </div>
                </div>
            </Container>
        </>
    )
}

export default DetailPage;