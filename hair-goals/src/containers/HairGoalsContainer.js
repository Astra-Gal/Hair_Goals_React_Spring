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

    const [users, setUsers] = useState(
        [
            {
                id:1,
                name: "Mario",
                hairLength: 60,
                date:"02/04/2021",
                birthday:"08/05/1991"
            }
        ]
    )

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
