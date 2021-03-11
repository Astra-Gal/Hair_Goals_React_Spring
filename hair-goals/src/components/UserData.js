import React from 'react';
import {Link} from 'react-router-dom';
// import NavBar from './NavBar';

const UserData = ({theOneUser}) => {

    if (!theOneUser){
      return (

          <>
            <h1>Ooops looks like you may want to create a user before coming here!</h1>

            <Link to='/new-user' className="navlink"><h1>Create a user!</h1></Link>

          </>
      )
    }

  
    const userMeasurements = theOneUser.measurements.map((measurement, index) => {
      return <li key={index}> Date measured: {measurement.dateMeasured} - Length: {measurement.length}</li>
    })

    return (

      <>


        <h2>Congratulations, {theOneUser.name}!</h2>
        <ul>
          {userMeasurements}
        </ul>
        <p>You've just embarked on a magical hair journey! Let's Grow Together</p> 
        <p> Your hair is {theOneUser.hairLength}cm. Good Growing!</p>
        <p>You want to grow to {theOneUser.goalHairLength}cm. You Rapunzel you.</p>
        <h4>Based on the average human growth rate, you have {theOneUser.timeTillGoal} months till you meet your goal length</h4>
        <p>"Your hair is {theOneUser.keyLength.toLowerCase()} length, Horah for you!"</p>

        <Link to='/add-measurement' className="navlink"><button>Add Measurement</button></Link>

        </>
    )
}



export default UserData;