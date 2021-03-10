import React, {useEffect, useState}from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SiteHeader from './SiteHeader';
import Welcome from '../components/Welcome';
import NewUserForm from '../components/NewUserForm';
import UserData from '../components/UserData';
import EditDetails from '../components/EditDetails';
import AddMeasurement from '../components/AddMeasurement';
import ErrorPage from '../components/ErrorPage';
import Request from '../helpers/Request';



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

    const findUserById = function(id){
        return users.find((user) => {
            return user.id === parseInt(id);
        })
    }

    const handleDelete = function(id){
        const request = new Request();
        const url = "/users/" + id;
        request.delete(url)
        .then(() => window.location = "/user-details")
    }
    

    const handleCreate = function(user){
        const request = new Request();
        request.post("/users", user)
        .then(() => window.location = "/user-details")
    }

    const handleUpdate = function(user){
        const request = new Request();
        request.patch("/users/" + user.id, user)
        .then(() => {
            window.location = "/users/" + user.id; // we don't currently have a /users/ path
        })
    }
    

    if(!users){
        return null;
    }
    if(!loaded){
        return null;
    }

    return (
        <Router>
            <>
            <SiteHeader/>                
                <Switch>
                    <Route exact path="/" component={Welcome}/>
                    <Route path="/new-user" render={() => <NewUserForm  onNewUserSubmit={handleCreate}/>}/>
                    <Route exact path="/user-details/:id" render={(props) =>{
                        const id = props.match.params.id;
                        const user = findUserById(id);
                        return <UserData user={user}
                        onDelete={handleDelete}
                        />
                    }} />
                    <Route path="/add-measurement" component={AddMeasurement}/>
                    <Route path="/edit-details" component={EditDetails}/>
                    <Route component={ErrorPage}/>
                </Switch>

            </>
        </Router>
    )
}

export default HairGoalsContainer;
