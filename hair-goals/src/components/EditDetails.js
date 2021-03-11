import React, {useState, useEffect} from 'react';

// import NavBar from './NavBar';

const EditDetails = ({theOneUser, onUpdated}) => {

    const [stateUser, setStateUser] = useState(
        {
            name : "",
            hairLength : "",
            goalHairLength : ""
        }
    )

    const handleChange = function(event){
        let propertyName = event.target.name;
        let copiedUser = {...stateUser}
        copiedUser[propertyName] = event.target.value;
        setStateUser(copiedUser)
    }

    const handleSubmit = function(event){
        event.preventDefault();
            onUpdated(stateUser)
        }


    useEffect(()=>{
        if(theOneUser){
        let copiedUser = {...theOneUser}
        setStateUser(copiedUser)
    }
        }, [theOneUser])
    

    return (

        <>
        <h5>Edit your details!</h5>

        </>
    )
}




export default EditDetails;