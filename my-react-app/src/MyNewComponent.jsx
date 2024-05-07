// updater function = A function passed as an argument to setstate() usually ex setYear() allow for safe updates based on thr previous state uses  wiht multiple state updates and asynchrounous functions good practce to use updater function

import React , {useState} from "react"

function MyNewComponent(){
    const [count , setCount] = useState(0);

    const increment = () => {

        // Takes the Pending state to calculate Next state
        // React puts your updater function in a queue (waiting in line)
        // During the next render ,  it will cal them in the same order 

        setCount(c  => c +1)
        setCount(c  => c +1)
        setCount(c  => c +1)
        
    }
    const decrement = () => {
         setCount(c  => c - 1)
        setCount(c  => c -1)
        setCount(c  => c -1)
    }
    const reset = () => {
        setCount(c => c = 0)
    }

    return(
        <div className='counter-container'>
            <p className='count-display'>{count}</p>
            <button className='counter-button' onClick={decrement}>Decrement</button>
            <button className='counter-button' onClick={reset}>Reset</button> 
            <button className='counter-button' onClick={increment}>Increment</button> 

        </div>
    )
}
export default MyNewComponent