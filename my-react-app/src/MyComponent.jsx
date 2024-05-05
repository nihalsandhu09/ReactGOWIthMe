 // using useState function we create a state for a variable  and a setter function to update that variable 
import React, {useState} from 'react';
function MyComponent(){

   
    const   [name , setName] = useState("Guest"); // we can set intial state in useState as a parameter 
    const [age , setAge]  = useState(0) 
    const [isEmployed , SetIsEmployed] = useState(false)

     const  updateName = () =>{
      setName("Nihal Sandhu")
     }
     const  incrementAge = () =>{
      setAge(age+2)
     }

    const toggleEmployedStatus = ()=>{
        SetIsEmployed(!isEmployed)
    }


    return(<div>
        <p> Name : {name}</p>
        <button onClick={updateName}> Set Name</button>

        <p> Age : {age}</p>
        <button onClick={incrementAge}> Increment Age</button>
        
        <p> Is employed : { isEmployed ? "Yes" : "No" }</p>
        <button onClick={toggleEmployedStatus}> Toggl Status</button>

    </div>)
}
export default MyComponent