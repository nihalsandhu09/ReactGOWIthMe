// In React, you can update the state of an object using the setState method provided by the useState hook. Here's a basic example of how you can update a state object in a functional component:

import React , {useState} from "react";

function Component(){
 
     const [car , setCar] = useState({year: 2024,
                                make:"ford" ,
                                  model : "Mustang"})
     
                                  
       function handleYearChange(event){

        setCar(c => ({...c , year:event.target.value}));
       }                           
       function handleMakeChange(event){
       setCar( c=> ({...c , make:event.target.value}))
       }                           
       function handleModelChange(event){
       setCar(c=> ({...c , model:event.target.value }))
       }                           
    return(
   <div>
    <p>You favour car is : {car.year} {car.make} {car.model}</p>
    <input type="number" onChange={handleYearChange} value={car.year} /> <br />
    <input type="text" onChange={handleMakeChange} value={car.make} /> <br />
    <input type="text" onChange = {handleModelChange} value={car.model} /> <br />
   </div>
    )

}
export default Component