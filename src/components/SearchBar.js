import React from 'react';

import { Link } from 'react-router-dom';

import Logo from '../assets/img/Logo_ML.png';
import SearchIcon from '../assets/img/ic_Search.png';
import '../sass/components/SearchBar.scss';

const SearchBar = props => {
    return (
        <div className="search-bar">
            <div className="container">
                <div className="row">
                    <div className="col-md-1 offset-md-1">
                        <Link to="/">
                            <img src={Logo} className="logo" alt="Mercado Libre" />
                        </Link>
                    </div>
                    <div className="col-md-9">
                        <form action="/items">
                            <input type="text" name="search" placeholder="Nunca dejes de buscar" />
                            <button><img src={SearchIcon} alt="Buscar" /></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;