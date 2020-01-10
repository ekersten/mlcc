import React from 'react';
import { Link } from 'react-router-dom';

import '../sass/components/ResultsListItem.scss';

const ResultsListItem = ({item}) => {

    return (
        <Link to={`/items/${item.id}`}>
            <div className="results-list-item">
                <figure>
                    <img src={item.picture} alt={item.title}/>
                </figure>
                <div className="info">
                    <div className="title">{item.title}</div>
                </div>
                <div className="location">
                    {item.city}
                </div>
            </div>
        </Link>
    )

}

export default ResultsListItem;