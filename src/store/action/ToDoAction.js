import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from './types'

export const addToDo = (message) => ({
    type: ADD_TODO,
    message,
})

export const deleteToDo = (id) => ({
    type: DELETE_TODO,
    id,
})

export const updateToDo = ({ message, id }) => ({
    type: UPDATE_TODO,
    message,
    id,
})