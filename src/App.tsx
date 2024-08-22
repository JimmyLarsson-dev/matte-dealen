import { useState } from 'react'
import './App.css'
import Start from "./components/Start.tsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Start/>
  )
}

export default App
