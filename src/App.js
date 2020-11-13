
import {useState, useEffect} from 'react'
import ToDo from './components/ToDo'
import AddToDo from './components/AddToDo'

import './App.css';

function App() {
  const [inputText, setInputText] = useState ( "" )
  const [todos, setTodos] = useState( [{id:1, completed: false, description: "Taking out the trash"}] )
  const [status, setStatus] = useState ("all")
  const [filteredTodos, setFilteredTodos] = useState ([])

  useEffect (()=> {
    handleFilter();
  }, [todos, status]) ;

  const handleFilter = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  return (
    <div className="App">
      <header>
      <h1>Todo App</h1>
      </header>
      <AddToDo 
        inputText={inputText} 
        setInputText={setInputText} 
        todos={todos} 
        setTodos={setTodos} 
        setStatus={setStatus} 
         />
      <ToDo 
        todos={todos} 
        setTodos={setTodos} 
        filteredTodos={filteredTodos}
        />
    </div>
  );
}

export default App;
