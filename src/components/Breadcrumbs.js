import React from 'react';
import '../sass/components/Breadcrumbs.scss';

const Breadcrumbs = (props) => {
    return (
        <div className="container">
            <div className="row breadcrumbs">
                <div className="col-md-10 offset-md-1">
                    test > test > test
                </div>
            </div>
        </div>
        
    )
}

export default Breadcrumbs;