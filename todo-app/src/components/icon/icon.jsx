import './icon.css'
import Completed from './assets/complete.svg?react'
import Add from './assets/add.svg?react'

function Icon({ completed, className, runFunction }) {
  if (completed) {
    return <Completed className={className} onClick={runFunction} />
  }
  return <Add className={className} onClick={runFunction} />
}

export default Icon