import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NameInput from './NameInput'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NameInput />
    </div>
  )
}

export default App
