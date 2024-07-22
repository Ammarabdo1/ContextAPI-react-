import React ,{createContext , useState} from 'react'
import A from './A'

export const MyName = createContext()
const App = () => {
  const [name ,setName] = useState('')
  return (
    <div>
      <input value={name} onChange={(e)=> setName(e.target.value)} />
      <MyName.Provider value={name}>
        <A />
      </MyName.Provider>
    </div>
  )
}

export default App