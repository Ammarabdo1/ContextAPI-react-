import React ,{useContext} from 'react'
import { MyName } from './App'
const F = () => {
  return (
    <div>
        <h2 style={{color:'gray'}}>{useContext(MyName)}</h2>
    </div>
  )
}

export default F