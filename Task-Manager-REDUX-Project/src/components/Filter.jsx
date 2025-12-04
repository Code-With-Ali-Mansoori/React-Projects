import {useSelector,  useDispatch} from "react-redux";
import {filterTask} from '../Redux/feature.js';

const Filter = () => {

  const task_Status = useSelector(state => state.Alltask.task_Status);
  const dispatch = useDispatch();

  return (
    <div className="text-center mt-6">

        <button onClick={() => dispatch(filterTask('all'))} className={`p-3 py-2 mr-4 font-medium border rounded-2xl  text-black ${task_Status=='all' && "bg-blue-700 text-white"}`}>All Tasks</button>

        <button onClick={() => dispatch(filterTask('completed'))} className={`p-3 py-2 mr-4 font-medium border rounded-2xl text-black ${task_Status=='completed' && "bg-blue-700 text-white"}`}>Completed Tasks</button>

    </div>
  )
}

export default Filter;