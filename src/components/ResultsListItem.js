import React from 'react';
import { Link } from 'react-router-dom';

import '../sass/components/ResultsListItem.scss';

const ResultsListItem = ({item}) => {

    return (
        <Link to={`/items/${item.id}`} className="results-list-item">
            <img src={item.picture} alt={item.title}/>
            <div className="info">
                <div className="price">$ {item.price.amount} {item.price.decimals ? <span className="decimals">.{item.price.decimals}</span> : null}</div>
                <div className="title">{item.title}</div>
            </div>
            <div className="location">
                {item.city}
            </div>
        </Link>
    )

}

export default ResultsListItem;