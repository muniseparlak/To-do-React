
import { useState } from 'react'
import Form from './form'
import List from './list'

function Index() {
    const [todos, setTodos] = useState([])

  return (
    <div>
        <div>
         <h1 className='todos'>TODOS</h1>
        </div>
            <Form todos={todos} setTodos={setTodos}/>
            <List todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default Index
