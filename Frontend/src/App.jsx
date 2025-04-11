import { useState } from 'react'
import './App.css'
import Routing from './Routing.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container-fluid'>
    <Routing />
    </div>
  )
}

export default App
