import React from 'react';

const ToDoItem = (props) => {

  const handleDelete = () => {
      props.setTodos(props.todos.filter(todo => (
        props.id !== todo.id
      )
    ))
  }

  const handleComplete = () => {
    props.setTodos(props.todos.map(item => {
      if (item.id === props.id){
        console.log('its completed');
        return {
          ...item, completed: !item.completed
          
        }

      }
      return item;
    }))
  }


  return ( 
    
    <div className="todo">
        <li className={`todo-item ${props.todo.completed ? 'completed' : '' }`}>{props.description}</li>
        <button className='complete-btn' onClick={handleComplete}> <i className='fas fa-check'>  </i> </button>
        <button className='trash-btn' onClick={handleDelete}> <i className='fas fa-trash'></i> </button>
      </div>
   );
}
 
export default ToDoItem;