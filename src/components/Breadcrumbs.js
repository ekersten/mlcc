import React from 'react';
import '../sass/components/Breadcrumbs.scss';

const Breadcrumbs = (props) => {
    return (
        <div className="container">
            <div className="row breadcrumbs">
                <div className="col-md-10 offset-md-1">
                    {props.items.map((item, index) => {
                        const last = index === props.items.length - 1;
                        return (<span>{item}{!last ? ' > ' : null}</span>)
                    })}
                </div>
            </div>
        </div>
        
    )
}

export default Breadcrumbs;