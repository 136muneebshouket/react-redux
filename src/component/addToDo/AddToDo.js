import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { addToDo } from '../../store/action/ToDoAction'
import cuid from 'cuid'


const AddToDo = () => {
    const [task, settask] = useState('')
 
    const dispatch = useDispatch();
  
    function handlerInputChange(e) {
      settask(e.target.value);
    }

    function handlerForSubmit (e) {
      e.preventDefault();
      settask(dispatch(addToDo({task: task, id: cuid()})));
      e.target.userInput.value="";
    }
  return (
   <form onSubmit={handlerForSubmit}>
       <input type= 'text' name='userInput' onChange={(e) => handlerInputChange(e)  }/> 
       <button type='submit'>AddToDo</button>
   </form>
  );
};

export default AddToDo