import React from 'react';
import {Link} from 'react-router-dom';
const NavBar = ({user}) => {
    const ExistingUserNavBar = () => {
        return  (<>
                <li>
                        <Link to='/edit-details' className="navlink">Edit measurements</Link>
                </li> 
                <li>
                        <Link to='/add-measurements' className="navlink">Add new measurement</Link>
                </li>
                </>)
               
    
    }
    const GuestUserNavBar = () => {
        return  <li>
                        <Link to='/new-user' className="navlink">New Here? Sign Up!</Link>
                </li> 
            
    
    }
    
    const CustomUserNavBar = () => {
        if (user){
            return <ExistingUserNavBar/>;
        }else{
        return <GuestUserNavBar/>
    
    }
}
 
    return (
        <ul className="navbar">
        <li>
            <Link to="/" className="navlink">Home</Link>
        </li>
        <CustomUserNavBar/>
        <li>
            <Link to='/user-details' className="navlink">My Details</Link>
        </li>
        <li>
                <Link to='/about' className="navlink">About us</Link>
            </li>
            <li>
                <Link to='/guide' classname="navlink">A quick how to</Link>
            </li>
        
        
    </ul>
    
    )
}
// const NavBar = ({users}) => {
//     if(!users){
//         return null;
//     }
//     return (
//         <div>
//         <ul className="navbar">
//             <li>
//                 <Link to="/" className="navlink">Home</Link>
//             </li>
//             {users.length >= 1 ? (<li>
//                 <Link to='/new-user' className="navlink">Enter your hair future!</Link>
//             </li> )  : <p>Welcome {users[0].name}</p>}
            
//             <li>
//                 <Link to='/user-details' className="navlink">My Details</Link>
//             </li>
//         </ul>
//         </div>
//     )
// }
export default NavBar;