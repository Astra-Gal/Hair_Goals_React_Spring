import React from 'react';
import NavBar from './NavBar';

const UserData = ({user}) => {

    if (!user){
      return "Hawd on!!!!"
    }

  
    const userMeasurements = user.measurements.map((measurement, index) => {
      return <li key={index}> Date measured: {measurement.dateMeasured} - Length: {measurement.length}</li>
    })

    return (


      <>
        <NavBar user={user}/>
        <h2>Congratulations, {user.name}!</h2>
        <ul>
          {userMeasurements}
        </ul>
        
        <p>You've just embarked on a magical hair journey! Let's Grow Together</p> 
        <h4>Based on the average human growth rate, you have {user.timeTillGoal} months till you meet your goal length</h4>
        </>
    )
}



export default UserData;