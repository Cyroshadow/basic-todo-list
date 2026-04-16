import './TaskMaster.css'
import Task from '../Task/Task.jsx'
import Icon from '../Icon/Icon'

function TaskMaster() {

  let taskList = ["Do the dishes", "Take out the trash", "Explode"]

  function AddTask({ taskName }) {
    taskList.push(taskName);
  }

  let ToDo =
    <>
      <div className='ToDo'>
        {
          taskList.map((task, index) => (
            <Task taskId={index}>{task}</Task>
          ))
        }
      </div>
      <button className='Add' onClick="AddTask()">Create new task<Icon className="AddTask" /></button>
    </>

  return ToDo
}

export default TaskMaster