import './task.css'
import Icon from '../icon/icon.jsx'

function Task({ children }) {
  let component =
    <div className="task-container">
      <label>{children}</label>
      <Icon className="status">complete</Icon>
    </div>

  return component
}

export default Task