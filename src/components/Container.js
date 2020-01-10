import React from 'react';

import '../sass/components/Container.scss';

const Container = (props) => {
    return (
        <div className="container">
            <div className="col-md-10 offset-md-1 main-wrapper">
                {props.children}
            </div>
        </div>
    );
}

export default Container;