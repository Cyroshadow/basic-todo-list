import './Task.css'
import Icon from '../Icon/Icon.jsx'
import { useState } from 'react'

export default function Task({ children, completed, onComplete, onToggle}) {

  const [taskCompleted, setTaskCompleted] = useState(completed);

  function updateTask() {
    if (taskCompleted) {
      onComplete();
    } else {
      setTaskCompleted(true);
      onToggle();
    }
  }

  let component =
    <div className="task-container">
      <label className={taskCompleted ? "completedTask" : ""}>{children}</label>
      <Icon className="taskState" runFunction={updateTask} completed={taskCompleted} />
    </div>

  return component
}

