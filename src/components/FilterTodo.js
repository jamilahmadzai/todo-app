import React from 'react';

const FilterTodo = () => {

  const handleStatus = (e) => {
    props.setStatus(e.target.value);

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
    
  }

  return ( 
    <div className="select">
          <select onChange={handleStatus} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
   );
}
 
export default FilterTodo;