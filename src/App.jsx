import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import QuoteBox from './components/QuoteBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <QuoteBox />
    </div>
  )
}

export default App
