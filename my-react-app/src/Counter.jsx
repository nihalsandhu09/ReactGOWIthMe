//  React hook = special function that allows functional components to use react feature without writing class components (React v16.8)(usestate , useEffect , useContext , useReducer , useCallback ,and more)

// useState() = A React hook that allows the creation of a stateful variable and a setter function to update its value in the virtual DOM,
// useState: A React hook that enables functional components to manage internal state. It returns an array containing a stateful variable and a setter function. The variable holds the current state value, and the setter function allows updating this value, triggering a re-render of the component.







import React, {useState} from 'react';
function Counter(){

    const [count , setCount] = useState(0);

    const increment = () => {
        setCount(count+1)
    }
    const decrement = () => {
        setCount(count-1)
    }
    const reset = () => {
        setCount(0)
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
export default Counter