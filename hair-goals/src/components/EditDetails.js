import React, {useState, useEffect} from 'react';

// import NavBar from './NavBar';

const EditDetails = ({theOneUser, onUpdated}) => {

    const [stateUser, setStateUser] = useState(
        {
            name : "",
            hairLength : "",
            // goalHairLength : ""
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
           <div className="form-wrapper">
            
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    What's your name?<br/>
                    <input
                        type="text"
                        placeholder="Name Please!"
                        name="name"
                        value={stateUser.name}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="hairLength">
                    What's your hair length in cm?
                    <input
                        type="number"
                        placeholder="Hair Length in cm"
                        name="hairLength"
                        value={stateUser.hairLength}
                        onChange={handleChange}
                    /> 
                </label>
{/*                 
                <label htmlFor="goalHairLength">
                    What's your goal length in cm?
                    <input
                        type="number"
                        name="goalHairLength"
                        placeholder="Goal Length in cm"
                        value={stateUser.goalHairLength}
                        onChange={handleChange}
                    /> 
                </label> */}
                <button>See your hair future...<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.477 0h-8.977l12.024 12-12.024 12h8.977l12.023-12z"/></svg></button>                                  
            </form>
            </div>

        </>
    )
}




export default EditDetails;