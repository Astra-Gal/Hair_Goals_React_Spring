import React from 'react';
import NavBar from './NavBar';
import Logo from './Logo';
import horsehair from '../assets/horsehair.jpg'

const Welcome = () => {
    return (
        
        <div >
        <NavBar/>
        <Logo/>
        <h2 className="welcome">... let's grow together!</h2>
        <div className="wrapper">
        <img className="testhorse" src={horsehair} alt="horse with great hair"/>
        </div>
        </div>
    );
}




export default Welcome;