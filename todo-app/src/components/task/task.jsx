import './task.css'
import Icon from '../icon/icon.jsx'
import { useState } from 'react'

export default function Task({ children }) {

  const [taskCompleted, setTaskCompleted] = useState(true);

  function updateTask() {
    console.log("i was pressed");
    setTaskCompleted(taskCompleted => !taskCompleted);
  }

  if (taskCompleted) {
    
  }

  let component =
    <div className="task-container">
      <label className={taskCompleted ? "completedTask" : ""}>{children}</label>
      <Icon className="taskState" runFunction={updateTask} completed={taskCompleted} />
    </div>

  return component
}

