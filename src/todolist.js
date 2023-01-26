import React, { useState } from 'react';

function TodoList() {
  // useState hook to manage the state of the application
  const [todoItems, setTodoItems] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  // function to handle the submission of the form
  const handleSubmit = (event) => {
    event.preventDefault();
    setTodoItems([...todoItems, newTodo]);
    setNewTodo('');
  }

  return (
    <div class="container  items-center flex-col" >
      <form  onSubmit={handleSubmit}>
        <label for="task"> 
        List your todo tasks of the day
        </label>
        <textarea 
          type="text" rows="5"
          value={newTodo} 
          onChange={event => setNewTodo(event.target.value)} >

        </textarea>
        
        <button type="submit">Add Todo</button>
      </form>
      <ol >
        {todoItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
}

export default TodoList;
