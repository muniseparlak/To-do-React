
import React from 'react'
import "../../App.css"


function List({todos, setTodos}) {


	const deletetodo = ({id}) => {
		setTodos(todos.filter((todo)=> todo.id !== id ))
		
	}
	
		
  return (
	<div>
		<div className='mainlist'>
   				 <div className='list'>
					
					{todos.map((todo)=> (
						<li key={todo.id}>
							<input className='inputtext' type="text" value={todo.title} onChange={(e) => e.preventDefault()}/>
						
					<input  type="checkbox" className="complete" />
						
					
					<button className="destroy" onClick={()=> deletetodo(todo)}>
						<i className='fa-solid fa-xmark'/>
					</button>
						
					
					
					</li>
					))} 
				</div>
		</div>


		<footer class="footer">
		<span class="todo-count">
			<strong>{todos.length}</strong>
			items left
		</span>
		 </footer>
		
</div>
			
  )
}	

export default List



