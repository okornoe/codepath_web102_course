import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const multiplier = 1;

  const updateCount = () => setCount(count + multiplier);

  return (
    <div className='App'>
      <div className='header'>
        <h1>Samosa Selector</h1>
        <img className='samosa' onClick={updateCount} src='src/assets/samosa_img.jpg'></img>
        <h2>Count: {count}</h2>
      </div>
    </div>
  )
}

export default App
