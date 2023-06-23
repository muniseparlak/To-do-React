import { useState } from 'react'
import {v4 as uuidV4} from "uuid"


function Form({todos, setTodos}) {

  const [todoValue, setTodoValue] = useState("")
   
  const handleChange = (e) => {
      setTodoValue(e.target.value)
  }

  const onSubmit = (e) => {
        e.preventDefault();
        setTodos([...todos, {id: uuidV4(), title: todoValue, completed: false}])
        setTodoValue("")
    }
  return (

  <div className = "header">
       <form onSubmit={onSubmit}>
			     <input 
              type= "text"
               onChange={handleChange}
               className="new-todo" 
               placeholder="Please enter your todo"
               name="input"
              value={todoValue}
           />
           <button className='btn' >
           <i className="fa-solid fa-pen"></i>
           </button>
     </form>
  </div>
   
  )
}

export default Form
