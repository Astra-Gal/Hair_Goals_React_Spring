import React from 'react';
import Logo from '../components/Logo';
import NavBar from '../components/NavBar';


const SiteHeader = ({users}) => {
    return (
        <>
        
        <NavBar users={users}/>
        <Logo/>
        </>
    )
}


export default SiteHeader;
