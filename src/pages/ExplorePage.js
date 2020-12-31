import React from 'react';
import { Route, Link, useRouteMatch } from 'react-router-dom';

import { PlacePage } from './../pages';

// this piece-specific page will have to be moved deeper into hierarchy
export const ExplorePage = (props) => {
    let { path, url } = useRouteMatch();

    return (
        <div>
            <h1>Explore page</h1>
            <Link to={`${url}/florence`}>View Florence</Link>
            <Route path={`${path}/florence`} component={PlacePage} />
        </div>
    );
}