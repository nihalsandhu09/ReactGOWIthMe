// useEffect = > React hook that tells react Do Some Code When(pick one):
//               This component re-renders
    //           this component mounts 
    //           the state if a value

    // useEffect(function ,[dependencies])
    // 1 useEffect(()=> {})        // runs after every re-render
    // 2 useeffect(()=> {} , [])   // Runs only on mount 
    // 3 useEffect(()=> {} , [value])  // runs onmount + whne value changes 


    // USES 
    // #1 Event Listeners 
    // #2 DOM manipulation
    // #3 Subcriptions(real-time updates)
    // #4 Fetching Data from an api
    // #5 Clran up when a component unmounts 

import React ,{useState , useEffect} from "react"
function CounterNext(){
      const [count,setCount] =useState(0);
      const [color ,setColor] = useState("green");


       useEffect(()=>{
        document.title = `Count ${count} ${color}`
        return()=>{
          // some cleanup code 
          
        }
       }, [count , color])


      function addCount(){
        setCount(c => c+1)
      }
      function SubtractCount(){
        setCount(c => c-1)
      }
      function changeColor(){
        setColor(c => c === "green" ? "red" : "green");
      }
    return(
        <div>
      <p style={{color:color}}> Count : {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={SubtractCount}>Subtract</button><br />
      <button onClick={changeColor}>Change color</button>
        </div>
    )
}
export default CounterNext