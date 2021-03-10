import React from 'react';
import Logo from '../components/Logo';
import NavBar from '../components/NavBar';


const SiteHeader = ({users, user, loaded}) => {
    if (loaded ){console.log("Site Header", user)}
    return (
        <>
        
        <NavBar 
        user={user}
        users={users}
        loaded={loaded}
        />
        <Logo/>
        </>
    )
}


export default SiteHeader;
