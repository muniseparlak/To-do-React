import Index from './components';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  
 const [todos, setTodos] = useState([
  {}
 ])

  return (
    <div >
    <Index/>
    </div>
  );
}

export default App;
