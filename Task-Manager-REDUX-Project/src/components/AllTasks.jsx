import { useSelector , useDispatch} from "react-redux";
import {Done_Task, Delete_Task} from '../Redux/feature.js';

const AllTasks = () => {

  const tasks = useSelector(state => state.Alltask.tasks);
  const task_Status = useSelector(state => state.Alltask.task_Status);
  const dispatch = useDispatch();

  const filtered = task_Status == 'completed' ? tasks.filter(task => task.completed == true) : tasks;

  console.log(task_Status, tasks);
  
  return (
    <>
    {tasks.length > 0 &&
        filtered.map((data) => {
          return (<li key={data.id} className="border rounded-2xl w-2xl my-5 mx-auto flex justify-between pl-2 items-center">
                <p className={`pl-4 ${data.completed ? "line-through text-gray-400" : "no-underline"}`} >{data.text}</p>

                <div>
                <button onClick= {() => dispatch( Done_Task(data.id)) } className="px-4 font-medium bg-green-600 text-white py-2 border active:bg-green-700">
                  {data.completed ? 'Undo' : 'Done'}
                </button>
                <button onClick= {() => dispatch( Delete_Task(data.id)) }  className="px-4 rounded-r-2xl font-medium bg-red-600 text-white py-2 border">Delete</button>
                </div>
          </li>)  
        })
    }

    </>
  )
}

export default AllTasks;

    