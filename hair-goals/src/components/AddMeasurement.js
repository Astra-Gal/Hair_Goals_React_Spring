import React, {useState} from 'react';
// import NavBar from './NavBar';

const AddMeasurement = ({theOneUser, loaded, onNewAddedMeasurement}) => {
    
    const [length, setLength] = useState("");

    const [dateMeasured, setDateMeasured] = useState ("")

    const handleLengthChange = (evt) => {
        setLength(evt.target.value);
    }

    const handleDateMeasuredChange = (evt) => {
        setDateMeasured(evt.target.value);
    }

    const handleMeasurementSubmit = (evt) => {
        console.log("Running handleMeasurementSubmit")
        evt.preventDefault();
        const lengthToSubmit = length;
        const dateMeasuredToSubmit = dateMeasured;


        let proceed = true;

        if(!length){
            proceed = false
        } 

        if(!dateMeasured){
            proceed = false
        } 

        if (proceed === true){
            onNewAddedMeasurement ({
                length: lengthToSubmit,
                dateMeasured: dateMeasuredToSubmit,
                user: theOneUser
            })
            console.log(onNewAddedMeasurement);

            setLength("");
            setDateMeasured("")
        }
    }

    return (
        <>
            <form onSubmit={handleMeasurementSubmit}>

                <label htmlFor="length">
                    Add your updated hair length (in cm)
                    <input 
                        type="number" 
                        placeholder="Measurement in cm"
                        value={length}
                        onChange={handleLengthChange}/>
                </label>
                <br/>
                <br/>
                <label htmlFor="date">
                    What was that measurement taken?
                    <input 
                        type="text" 
                        placeholder="dd/mm/yyyy"
                        value={dateMeasured}
                        onChange={handleDateMeasuredChange}/>
                </label>
                <br/>
                <br/>
                <button>Submit</button>

            </form>
        </>
    )
}




export default AddMeasurement;
