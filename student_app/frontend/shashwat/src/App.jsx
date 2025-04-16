import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import View from './components/View'
import Update from './components/Update'
import Delete from './components/Delete'
import Register  from './components/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Register/>
        <View/>
        <Update/>
        <Delete/>
        </div>
    </>
  )
}

export default App
