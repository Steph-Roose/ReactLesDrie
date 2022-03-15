import React from 'react';
import{NavLink} from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
                </li>

                <li>
                    <NavLink to="/login" activeClassName="active-link">Login</NavLink>
                </li>

                <li>
                    <NavLink to="/blogposts" activeClassName="active-link">Blog Overzicht</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;