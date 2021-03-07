import React, {useState}from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SiteHeader from './SiteHeader';
import Welcome from '../components/Welcome';
import Form from '../components/Form';
import UserData from '../components/UserData';
import EditDetails from '../components/EditDetails';
import AddMeasurement from '../components/AddMeasurement';
import ErrorPage from '../components/ErrorPage';



const HairGoalsContainer = () => {
    return (
        <Router>
            <>
            <SiteHeader/>
                <h1>This is a hair goals container</h1>
                
                <Switch>
                    <Route exact path="/" component={Welcome}/>
                    <Route path="/new-user" component={Form}/>
                    <Route path="/user-details" component={UserData}/>
                    <Route path="/add-measurement" component={AddMeasurement}/>
                    <Route path="/edit-details" component={EditDetails}/>
                    <Route component={ErrorPage}/>
                </Switch>

            </>
        </Router>
    )
}

export default HairGoalsContainer;
