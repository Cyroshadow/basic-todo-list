import './icon.css'
import Completed from './assets/complete.svg?react'
import Add from './assets/add.svg?react'


function Icon({ children, className}) {
  if (children == "complete") {
    return <Completed className={className} />
  }
  return <Add />
}

export default Icon