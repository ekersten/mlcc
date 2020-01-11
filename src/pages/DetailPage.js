import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import '../sass/pages/DetailPage.scss';

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
                        {loading ? <p>Cargando...</p> : null}
                        {item ? (
                            <>
                                <div className="row">
                                    <div className="col-8">
                                        <img src={item.picture} alt={item.title}/>
                                    </div>
                                    <div className="col-4">
                                        <div className="sold">{item.condition === 'new' ? 'Nuevo' : 'Usado'} - {item.sold_quantity} {item.sold_quantity != 1 ? 'vendidos' : 'vendido'}</div>
                                        <div className="title"><h1>{item.title}</h1></div>
                                        <div className="price">
                                            {item.price.currency === 'USD' ? 'U$S' : '$'} {item.price.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} {item.price.decimals ? <span className="decimals">.{item.price.decimals}</span> : null}
                                        </div>
                                        <div className="buy">
                                            <button className="btn">Comprar</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row col-md-8 description">
                                    <h2>Descripción del producto</h2>
                                    <p>{item.description}</p>
                                </div>
                                
                            </>
                        ) : null}
                    </div>
                </div>
            </Container>
        </>
    )
}

export default DetailPage;