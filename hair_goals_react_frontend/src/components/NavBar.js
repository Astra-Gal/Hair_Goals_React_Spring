import React from 'react';
import { Link } from 'react-router-dom';
import LoginButton from '../components/LoginButton';
import LogoutButton from '../components/LogoutButton';
import Profile from '../components/Profile';
import { useAuth0 } from '@auth0/auth0-react';

const NavBar = () => {
    const { isAuthenticated } = useAuth0();

    // ternary to check if user isAuthenticated, and display different
    // navbar options if they are

    return isAuthenticated ? (
        <ul className="navbar">
            <li>
                <Link to="/" className="navlink">
                    Mane
                </Link>
            </li>
            <li>
                <Link to="/user-details/1" className="navlink">
                    My Details
                </Link>
            </li>
            <li>
                <Link to="/about" className="navlink">
                    About us
                </Link>
            </li>
            <li>
                <Link to="/guide" className="navlink">
                    A quick how to
                </Link>
            </li>

            <li>
                <LogoutButton />
            </li>
            <li>
                <Profile />
            </li>
        </ul>
    ) : (
        <ul className="navbar">
            <li>
                <Link to="/" className="navlink">
                    Mane
                </Link>
            </li>
            <li>
                <Link to="/new-user" className="navlink">
                    Try as a Guest!
                </Link>
            </li>
            <li>
                <Link to="/about" className="navlink">
                    About us
                </Link>
            </li>
            <li>
                <Link to="/guide" className="navlink">
                    A quick how to
                </Link>
            </li>
            <li>
                <LoginButton />
            </li>
        </ul>
    );
};

export default NavBar;
