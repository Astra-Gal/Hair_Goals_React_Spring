import React, {useEffect, useState}from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SiteHeader from './SiteHeader';
import Welcome from '../components/Welcome';
import Form from '../components/Form';
import UserData from '../components/UserData';
import EditDetails from '../components/EditDetails';
import AddMeasurement from '../components/AddMeasurement';
import ErrorPage from '../components/ErrorPage';
// import Request from '../helpers/Request';



const HairGoalsContainer = () => {

    const [users, setUsers] = useState([]);
    // const [measurements, setMeasurements] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const getAllUsers = () => {
        console.log("Keep your hair on! I'm fetching the users NOW!");
        fetch('/users')
        .then(res => res.json())
        .then(data => setUsers(data))
        .then(() => setLoaded(true))
        .catch(err => console.error);  
    }
    
    useEffect(() => {
        getAllUsers();
    }, [])
    console.log(users);
    
    const addNewUser = (newUser) => {
        newUser.id = Date.now(); // eventually this id will come from db
        const updatedUsers = [...users, newUser];
        setUsers(updatedUsers);
    }
    
    return (
        <Router>
            <>
            <SiteHeader/>                
                <Switch>
                    <Route exact path="/" component={Welcome}/>
                    <Route path="/new-user" render={() => <Form onNewUserSubmit={(user) => addNewUser(user)}/>}/>
                    <Route path="/user-details" component={UserData}/>
                    <Route path="/add-measurement" component={AddMeasurement}/>
                    <Route path="/edit-details" component={EditDetails}/>
                    <Route component={ErrorPage}/>
                </Switch>
                {/* <Form onNewUserSubmit={(user) => addNewUser(user)}/> */}

            </>
        </Router>
    )
}

export default HairGoalsContainer;
// const request = new Request();
// const userPromise = request.get('/api/users');
// const measurementPromise = request.get('/api/measurements');

// Promise.all(userPromise)
// .then((data) => setUsers(data))
// .then(() => setLoaded(true))
// .catch(err => console.error);
