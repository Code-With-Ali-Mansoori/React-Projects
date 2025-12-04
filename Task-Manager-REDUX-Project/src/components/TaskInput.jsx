import { useState } from "react";
import { useDispatch } from "react-redux";
import {Add_Task} from '../Redux/feature.js';

const TaskInput = () => {

  const [textValue, setTextValue] = useState('');
  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();

    if(textValue !== '' ) {
      dispatch(Add_Task(textValue))
      setTextValue('');

    } else {
      alert('Please Enter Some Tasks...')
    }
     
  };

  return (
  <>
    <form onSubmit={handleForm} className="text-center mt-18">

      <input 
      onChange={(e) => {setTextValue(e.target.value)}} 
      value={textValue} 
      className='p-4 py-2 border rounded mr-4 w-2xl' 
      type="text" 
      placeholder='Enter the Task here...'/> 

      <button 
      type="submit" 
      className="px-4 font-medium bg-green-600 text-white py-2 border"
      >Add</button>

    </form>
  </>
  )
}

export default TaskInput;