import React from 'react'
import ToDoItem from './ToDoItem'

const ToDo = (props) => {
  return ( 
    <div className="todo-container">
      <ul className="todo-list">
        {props.filteredTodos.map((todo) => (
          <ToDoItem  
          key={todo.id} 
          id={todo.id} 
          todo={todo} 
          description={todo.description} 
          todos={props.todos} 
          setTodos={props.setTodos} 
          />
        ))}

      </ul>
    </div>
   );
}
 
export default ToDo;