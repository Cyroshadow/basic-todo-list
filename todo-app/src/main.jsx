import { createRoot } from 'react-dom/client'
import './main.css'
import Title from './components/title/title.jsx'
import Task from './components/task/task.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <Title>hi hello</Title>
    <Task>Do the dishes</Task>
  </>
)
