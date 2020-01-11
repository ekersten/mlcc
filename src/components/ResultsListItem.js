import React from 'react';
import { Link } from 'react-router-dom';

import { formatDecimals } from '../utils';

import '../sass/components/ResultsListItem.scss';

import IconShipping from '../assets/img/ic_shipping.png';

const ResultsListItem = ({item}) => {

    return (
        <Link to={`/items/${item.id}`} className="results-list-item">
            <div className="item-image" style={{ backgroundImage: `url(${item.picture})`}}></div>
            <div className="info">
                <div className="price">
                    {item.price.currency === 'USD' ? 'U$S' : '$'} {item.price.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} {item.price.decimals ? <span className="decimals">{formatDecimals(item.price.decimals)}</span> : null}
                    {item.free_shipping ? (
                        <img src={IconShipping} className="free-shipping" alt="Envío gratis"/>
                    ) : null}    
                </div>
                <div className="title">{item.title}</div>
            </div>
            <div className="location">
                {item.city}
            </div>
        </Link>
    )

}

export default ResultsListItem;