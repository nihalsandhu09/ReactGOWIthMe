import React , {useState} from "react"

function ToDoList(){
    const [tasks , setTasks] = useState([]);
    const [newTask , setNewTask] = useState("")

    function handleInputChange(event){
     setNewTask(event.target.value)
    }

    function addtask(){
        if(newTask.trim() !==""){
            setTasks( t => [...t , newTask])
            setNewTask("")
        }
     
    }
    function deleteTask(index){
      const updatedTasks =tasks.filter((_ , i)=> i !== index)
       setTasks(updatedTasks)
    }

    function MoveTaskUp(index){
       if(index > 0){
    const updatedTasks = [...tasks];
    [ updatedTasks[index] , updatedTasks[index - 1]] = [updatedTasks[index - 1] , updatedTasks[index]]
    setTasks(updatedTasks);
 }
    }


    function moveTaskDown(index){
        if(index < tasks.length-1){
            const updatedTasks = [...tasks];
            [ updatedTasks[index] , updatedTasks[index + 1]] = [updatedTasks[index + 1] , updatedTasks[index]]
            setTasks(updatedTasks);
         }
    }
    return(
        <div className="To-do-list"> 
         <h1>To-Do-list</h1>
         <div>
            <input
             type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange} />
 <button className="add-button" onClick={addtask}>
    Add
 </button>
             </div>

             <ol>
                {tasks.map((tasks , index)=>
                <li key={index}>


                    <span className="text">{tasks}</span>
                <button className="delete-button" onClick={()=> deleteTask(index)}>delete</button>
                
                <button className="move-button" onClick={()=> MoveTaskUp(index)}>UP</button>
                
                <button className="move-button" onClick={()=> moveTaskDown(index)}>Down</button>
                
                
                </li>
                )}
             </ol>
        </div>
       
    )
}
export default ToDoList