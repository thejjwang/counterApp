import { useState } from 'react'
import React from 'react'

function App() {
  const [count, setCount] = useState(1)
  const [input, setInput] = useState(0);

  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(input);
  }

  const incrementCount = () => {
    setCount(count + (input * 1));
  }

  const decrementCount = () => {
    setCount(count - (input * 1));
  }

  return (
    <div>
      <input onChange={handleChange} value={input} placeholder='Enter Increment By' type='number'></input>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <h2>{count}</h2>
    </div>
  )
}

export default App
