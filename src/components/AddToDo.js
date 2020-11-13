import React, {useState} from 'react';
import ToDo from './ToDo'

const AddToDo = (props) => {

  const handleChange = e => {
    props.setInputText(e.target.value)

  }

  const handleSubmit = e => {
    e.preventDefault();
    props.setTodos([
      ...props.todos, {
        description: props.inputText,
        id: Math.random () * 1000,
        completed: false
      }
    ]
    )
    props.setInputText("")
  }

  const handleStatus = (e) => {
    props.setStatus(e.target.value);
  }

  return ( 
    <div>
      <form onSubmit={handleSubmit}>
        <input value={props.inputText} onChange={handleChange} type="text" className="todo-input" />
        <button onClick={handleSubmit} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={handleStatus} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
   );
}
 
export default AddToDo;