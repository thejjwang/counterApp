  import { useState } from 'react'
  import React from 'react'

  function App() {
    const [count, setCount] = useState(0)
    const [input, setInput] = useState(0);

    const handleChange = (e) => {
      setInput(Number(e.target.value));
      console.log(input);
    }

    const incrementCount = () => {
      setCount(count + input);
    }

    const decrementCount = () => {
      setCount(count - input);
    }

    return (
      <div>
        <input onChange={handleChange} value={input} placeholder='Enter Increment By' type='number'></input>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>
        <h2>Count: {count}</h2>
      </div>
    )
  }

  export default App
