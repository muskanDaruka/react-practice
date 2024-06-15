import React from 'react'
import { useState } from 'react'
import Listitem from './Listitem'

function Todo() {
    const [todo, setTodo] = useState('')
    const [todoList, setTodoList] = useState([])
    const handleChange = (event) => {
        setTodo(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        let tempList = todoList;
        todoList.push(todo);
        setTodoList(tempList);
        console.log(todoList);
        setTodo('');
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={todo} onChange={handleChange}></input>
        <button type="submit">Add</button>
      </form>
      {todoList.map((item)=>(
       <Listitem name={item} key={item}/>
      ))}
    </div>
  )
}

export default Todo
