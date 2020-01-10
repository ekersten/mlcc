import React from 'react';
import { Link } from 'react-router-dom';

const ResultsListItem = (props) => {

    return (
        <p>
            <Link to={`/items/${props.item.id}`}>{props.item.title}</Link>
        </p>
    )

}

export default ResultsListItem;