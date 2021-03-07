import React from 'react';
import {Link} from 'react-router-dom';


const NavBar = () => {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to='/new-user'>New Here? Sign Up!</Link>
            </li>
            <li>
                <Link to='/user-details'>My Details</Link>
            </li>
        </ul>
    )
}



export default NavBar;