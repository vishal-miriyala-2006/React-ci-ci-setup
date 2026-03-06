import './App.css'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  return (
    <>
      <h1>hello world</h1>
      <div className="counter">
        <h2>Count: {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </>
  )
}

export default App
