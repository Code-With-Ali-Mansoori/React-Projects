import TaskInput from './components/TaskInput.jsx';
import Header from './components/Header.jsx';
import Filter from './components/Filter.jsx'
import ListTasks from './components/ListTasks.jsx'

const App = () => {
  return (
    <div className=''>
      <Header/>
      <TaskInput/>
      <Filter/>
      <ListTasks/>
      
    </div>
  )
}

export default App
