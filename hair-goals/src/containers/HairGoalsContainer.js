import React from 'react';
import SiteHeader from './SiteHeader';
import Welcome from '../components/Welcome';
import Form from '../components/Form';
import UserData from '../components/UserData';
import EditDetails from '../components/EditDetails';
import AddMeasurement from '../components/AddMeasurement';



const HairGoalsContainer = () => {
    return (
        <>
        <h1>This is a hair goals container</h1>
    
        <SiteHeader/>
        <Welcome/>
        <Form/>
        <UserData/>
        <AddMeasurement/>
        <EditDetails/>
     
       
        </>
    )
}

export default HairGoalsContainer;
