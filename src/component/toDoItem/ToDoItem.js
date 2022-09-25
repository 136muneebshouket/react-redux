import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteToDo, updateToDo } from '../../store/action/ToDoAction'
import { useState, useRef } from 'react'
const ToDoItem = ({ task }) => {
  const Dispatch = useDispatch();
  const [isUpdate, setIsUpdate] = useState(false)
  const textRef = useRef(null);

  function editItemToState(e) {
    e.preventDefault();
    Dispatch(updateToDo({message: textRef.current.value, id: task.id}))
    setIsUpdate(false);
    textRef.current = null;
  }

  const renderForm = () => {
    return (
      <form onSubmit={editItemToState}>
        <input ref={textRef} type='text' defaultValue={task.task} />
        <button type='submit'>Edit TODo</button>
      </form>
    )
  }


  const renderItem = () => {
    return (
      <div>
        {task.task}

        <button onClick={() => Dispatch(deleteToDo(task.id))} >DELETE</button>
        <button onClick={() => setIsUpdate(true)}>EDIT</button>
      </div>
    )
  }




  return (
    <div>
      {isUpdate ? renderForm() : renderItem()}
    </div>
  )
}

export default ToDoItem