import React from 'react';
import { Link } from 'react-router-dom';
import LoginButton from '../components/LoginButton';
import LogoutButton from '../components/LogoutButton';
import Profile from '../components/Profile';
import { useAuth0 } from '@auth0/auth0-react';

const NavBar = ({ theOneUser }) => {
    if (!theOneUser) {
        return (
            <ul className="navbar">
                <li>
                    <Link to="/" className="navlink">
                        Mane
                    </Link>
                </li>
                <li>
                    <Link to="/new-user" className="navlink">
                        New User? Sign Up Here!
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
                <li>
                    <LogoutButton />
                </li>
                <li>
                    <Profile />
                </li>
            </ul>
        );
    }

    return (
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
                <LoginButton />
            </li>
            <li>
                <LogoutButton />
            </li>
            <li>
                <Profile />
            </li>
        </ul>
    );
};

export default NavBar;
