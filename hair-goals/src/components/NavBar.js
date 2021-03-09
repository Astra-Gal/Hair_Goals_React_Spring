import React from 'react';
import {Link} from 'react-router-dom';



const NavBar = () => {
    return (
        <ul className="navbar">
            <li>
                <Link to="/" className="navlink">Home</Link>
            </li>
            <li>
                <Link to='/new-user' className="navlink">New Here? Sign Up!</Link>
            </li> 
            <li>
                <Link to='/user-details' className="navlink">My Details</Link>
            </li>
        </ul>
    )
}



export default NavBar;