import React from 'react';

import ResultsListItem from './ResultsListItem';

const ResultsList = (props) => {

    return (
        props.items.map(item => <ResultsListItem key={item.id} item={item} />)
    )

}

export default ResultsList;