import './Icon.css'
import Accomplish from './assets/accomplish.svg?react'
import Add from './assets/add.svg?react'
import Delete from './assets/delete.svg?react'

function Icon({ completed, className, runFunction }) {
  if (className == "CreateTask") {
    return <Add className={className} onClick={runFunction} />
  }
  else if (completed) {
    return <Delete className={className} onClick={runFunction} />
  }
  return <Accomplish className={className} onClick={runFunction} />
}

export default Icon