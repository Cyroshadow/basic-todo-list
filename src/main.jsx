import { createRoot } from 'react-dom/client'
import './main.css'
import Title from './components/Title/Title.jsx'
import TaskMaster from './components/TaskMaster/TaskMaster.jsx'


createRoot(document.getElementById('root')).render(
  <>
    <Title />
    <TaskMaster />
  </>
)
