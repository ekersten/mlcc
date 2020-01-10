import React from 'react';

import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';

import HomePage from '../pages/HomePage';
import ResultsPage from '../pages/ResultsPage';
import DetailPage from '../pages/DetailPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <HomePage/>
                </Route>
                <Route path="/items" exact>
                    <ResultsPage />
                </Route>
                <Route path="/items/:id">
                    <DetailPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
    
}

export default Router;