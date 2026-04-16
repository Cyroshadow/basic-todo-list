import './TaskMaster.css'
import Task from '../Task/Task.jsx'
import Icon from '../Icon/Icon'
import { useState, useEffect } from 'react'

function TaskMaster() {

  const [taskList, setTaskList] = useState(() => {
    const saved = localStorage.getItem("userTasks");
    return saved ? JSON.parse(saved) : []
  });

  useEffect(() => {
    localStorage.setItem("userTasks", JSON.stringify(taskList));
  }, [taskList]);

  const [task, setTask] = useState("");

  function addTask() {
    if (!task.trim()) {
      return;
    }
    setTaskList([...taskList, { id: Date.now(), text: task, completed: false }]);
    setTask("");
  }
  
  function deleteTask(id) {
    setTaskList(taskList.filter(task => task.id !== id));
  }

  return (
    <>
      <div id="taskCreator">
        <input type="text" placeholder="Do the dishes..." className="AddTask" value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
        />
        <button id="AddTask" onClick={addTask}><Icon className="CreateTask"></Icon></button>
      </div>
      {taskList.length > 0 && (
        taskList.map((task) => (
          <Task key={task.id} completed={task.completed} onComplete={() => deleteTask(task.id)}>{task.text}</Task>
        ))
      )}
    </>
  )
}

export default TaskMaster