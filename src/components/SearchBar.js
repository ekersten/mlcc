import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';

import Logo from '../assets/img/Logo_ML.png';
import SearchIcon from '../assets/img/ic_Search.png';
import '../sass/components/SearchBar.scss';

const SearchBar = props => {

    const history = useHistory();
    const [search, setSearch] = useState(props.search || undefined);

    const handleSearch = () => {
        if (search !== undefined) {
            history.push(`/items?search=${search}`)
        }
    }

    return (
        <div className="search-bar">
            <div className="container">
                <div className="row">
                    <div className="col-lg-1 col-2">
                        <Link to="/">
                            <img src={Logo} className="logo" alt="Mercado Libre" />
                        </Link>
                    </div>
                    <div className="col-lg-11 col-10">
                        <form action="/items" onSubmit={() => handleSearch()}>
                            <input type="text" name="search" value={search} onChange={e => setSearch(e.target.value)} placeholder="Nunca dejes de buscar" />
                            <button><img src={SearchIcon} alt="Buscar" /></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;