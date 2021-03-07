import React, {useState} from 'react';

const Form = ({onNewUserSubmit}) => {

    const [name, setName] = useState("");

    const [hairLength, setHairLength] = useState(0);

    const [date, setDate] = useState("");

    const [birthday, setBirthday] = useState("");

    const handleNameChange = (evt) => {
        setName(evt.target.value);
    }

    const handleHairLengthChange = (evt) => {
        setHairLength(evt.target.value);
    }

    const handleDateChange = (evt) => {
        setDate(evt.target.value);
    }

    const handleBirthdayChange = (evt) => {
        setBirthday(evt.target.value);
    }

    const handleFormSubmit = (evt) => {
        evt.preventDefault();
        const nameToSubmit = name.trim();
        const hairLengthToSubmit = hairLength.trim();
        const dateToSubmit = date.trim(); // might need to reformat date
        const birthdayToSubmit = birthday.trim();
        if(!nameToSubmit || !hairLengthToSubmit || !dateToSubmit || birthdayToSubmit){
            return
        }

        onNewUserSubmit({
            name: nameToSubmit,
            hairLength: hairLengthToSubmit,
            date: dateToSubmit,
            birthday: birthdayToSubmit
            
        });
        

        setName("");
        setHairLength(0);
        setDate("");
        setBirthday("");
        console.log("User has been submitted");
    }



    return (
        <form onSubmit={handleFormSubmit}>
            <input
            type="text"
            placeholder="Your Name Please"
            value={name}
            onChange={handleNameChange}
            />
            <input
            type="number"
            placeholder="Your Hair Length Please"
            value={hairLength}
            onChange={handleHairLengthChange}
            /> 
            <input
            type="text"
            placeholder="What is Today"
            value={date}
            onChange={handleDateChange}
            />
            <input
            type="text"
            placeholder="Your Birthday Please"
            value={birthday}
            onChange={handleBirthdayChange}
            />  
            <input
                type="Submit"
            />                                   
        </form>
    )
}





export default Form;