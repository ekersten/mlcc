import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import { useParams } from 'react-router-dom';
import axios from 'axios';

import '../sass/pages/DetailPage.scss';

import { formatDecimals } from '../utils';

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

    const pageTitle = item ? `Mercado Libre - ${item.title}` : 'Mercado Libre';
    const pageDescription = item ? item.description.substring(0, 150) : '';

    return (
        <>  
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
            </Helmet>
            <SearchBar />
            <Breadcrumbs items={categories} />
            <Container>
                {loading ? <p className="loading">Cargando...</p> : null}
                <div className="row detail">
                    <div className="col-12">
                        {item ? (
                            <>
                                <div className="row">
                                    <div className="col-8">
                                        <div className="item-image" style={{ backgroundImage: `url(${item.picture})` }}></div>
                                    </div>
                                    <div className="col-4">
                                        <div className="sold">{item.condition === 'new' ? 'Nuevo' : 'Usado'} - {item.sold_quantity} {item.sold_quantity !== 1 ? 'vendidos' : 'vendido'}</div>
                                        <div className="title"><h1>{item.title}</h1></div>
                                        <div className="price">
                                            {item.price.currency === 'USD' ? 'U$S' : '$'} {item.price.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} <span className="decimals">{formatDecimals(item.price.decimals)}</span>
                                        </div>
                                        <div className="buy">
                                            <button className="btn">Comprar</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row col-md-8 description">
                                    <h2>Descripción del producto</h2>
                                    <p>{item.description.split('\n').map((item, key) => {
                                        return <span key={key}>{item}<br /></span>
                                    })}</p>
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