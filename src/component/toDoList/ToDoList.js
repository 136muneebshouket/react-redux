import React from 'react'
import { useSelector } from 'react-redux'
import ToDoItem from '../toDoItem/ToDoItem';

const ToDoList = () => {
    const taskObj = useSelector((state) => state.ToDoReducer.data);
    const taskItems = taskObj.map((task) => {
        return (
            <ToDoItem task={task} key={task.id} />
        )
    }
    )
    return (
        <div>{taskItems}</div>
    )
}

export default ToDoList