import React from 'react';
import {Route, Redirect} from "react-router-dom";

function PrivateRoute({children, auth, ...rest}) {
    return (
        <Route {...rest}>
            {{auth} === true ? {children} : <Redirect to="/" />}
        </Route>
    );
}

export default PrivateRoute;