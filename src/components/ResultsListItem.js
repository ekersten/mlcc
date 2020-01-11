import React from 'react';
import { Link } from 'react-router-dom';

import '../sass/components/ResultsListItem.scss';

const ResultsListItem = ({item}) => {

    return (
        <Link to={`/items/${item.id}`} className="results-list-item">
            <div className="item-image" style={{ backgroundImage: `url(${item.picture})`}}></div>
            <div className="info">
                <div className="price">{item.price.currency === 'USD' ? 'U$S' : '$'} {item.price.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} {item.price.decimals ? <span className="decimals">.{item.price.decimals}</span> : null}</div>
                <div className="title">{item.title}</div>
            </div>
            <div className="location">
                {item.city}
            </div>
        </Link>
    )

}

export default ResultsListItem;