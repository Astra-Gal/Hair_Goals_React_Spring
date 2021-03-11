import React from 'react';
import Logo from '../components/Logo';
import NavBar from '../components/NavBar';


const SiteHeader = ({users, loaded}) => {
 
    return (
        <>
        
        <NavBar 
        users={users}
        loaded={loaded}
        />
        <Logo/>
        </>
    )
}


export default SiteHeader;
