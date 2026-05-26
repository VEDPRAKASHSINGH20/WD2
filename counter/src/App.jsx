import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(15)
  const addValue=()=>{
        setCount((prevCounter)=> prevCounter+1)   }
   const removeValue=()=>{
    if (count==0){
      setCount(0)
    }
    else{
      setCount(count-1)
    }
   }
  return (
    <>
      <h1>Hello </h1>
      <h3>Counter : {count}</h3>
      <button onClick={addValue}>Add value</button>
      <br/>
      <button onClick={removeValue} >Remove value</button>
    </>
  )
}

export default App
