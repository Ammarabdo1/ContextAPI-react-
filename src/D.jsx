import React ,{useContext} from 'react'
import {MyName} from './App'
import E from './E'
const D = () => {
  return (
    <div>
        <h1>{useContext(MyName)}</h1>
        <E/>
    </div>
  )
}

export default D