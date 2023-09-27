import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [multiplier, setMultiplier] = useState(1);

  const updateCount = () => setCount(count + multiplier);

  const buyDoubleStuffed = () => {
    if (count >= 10) {
      setMultiplier(multiplier * 2);
      console.log("double stuffed clicked")
      console.log(multiplier)
    }
  }

  const buyPartyPack = () => {
    if(count >= 100) {
      setMultiplier(multiplier * 5)
      console.log(multiplier)
    }
  }

  const buyFullFeast = () => {
    if (count >= 1000) {
      setMultiplier(multiplier * 10)
      console.log(multiplier)
    }
  }

  return (
    <div className='App'>
      <div className='container'>
        <div className='upgrade'>
          <h3>Double Stuffed</h3>
          <p>2x per Click</p>
          <button className='button' onClick={buyDoubleStuffed}>10 samosas</button>
        </div>

        <div className='upgrade'>
          <h3>Party Pack</h3>
          <p>5x per Click</p>
          <button className='button' onClick={buyPartyPack}>100 samosas</button>
        </div>

        <div className='upgrade'>
          <h3>Full Feast</h3>
          <p>10x per Click</p>
          <button className='button' onClick={buyFullFeast}>1000 samosas</button>
        </div>
        
      </div>
      <div className='header'>
        <h1>Samosa Selector</h1>
        <img className='samosa' onClick={updateCount} src='src/assets/samosa_img.jpg'></img>
        <h2>Count: {count}</h2>
      </div>
    </div>
  )
}

export default App
