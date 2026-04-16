import './Task.css'
import Icon from '../Icon/Icon.jsx'
import { useState } from 'react'

export default function Task({ children }) {

  const [taskCompleted, setTaskCompleted] = useState(false);

  function updateTask() {
    setTaskCompleted(taskCompleted => !taskCompleted);
  }

  let component =
    <div className="task-container">
      <label className={taskCompleted ? "completedTask" : ""}>{children}</label>
      <Icon className="taskState" runFunction={updateTask} completed={taskCompleted} />
    </div>

  return component
}

