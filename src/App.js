import React from 'react'
import AddToDo from './component/addToDo/AddToDo'
import ToDoList from './component/toDoList/ToDoList'


function App() {
  return (
    <div>
      <h1>ToDo APP</h1>
      <AddToDo/>
      <ToDoList/>
    </div>
  )
}

export default App