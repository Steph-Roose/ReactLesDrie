import React from 'react';
import{NavLink} from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" exact className="link" activeClassName="active-link">Home</NavLink>
                    </li>

                    <li>
                        <NavLink to="/login" className="link" activeClassName="active-link">Login</NavLink>
                    </li>

                    <li>
                        <NavLink to="/blogposts" className="link" activeClassName="active-link">Blogs</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;