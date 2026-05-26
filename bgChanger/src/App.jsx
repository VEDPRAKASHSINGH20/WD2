import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>{/* syntax of giving style ,since two curly braces so no curly braces required for valriable 'color'*/}
        <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg px-2 py-2 rounded-2xl bg-white ">
            <button onClick={()=> setColor("red")} className="outline-none px-4 py-1 text-white rounded-full shadow-lg" style={{backgroundColor:"red"}}>
              Red
            </button>
            <button onClick={()=> setColor("grey")}// on counter one we were passing fn directly which was taking no parameter but here we have to call setColor with updated value so callback fn is given ; onclick takes function not what functionis returning...
             className="outline-none px-4 py-1 text-white rounded-full shadow-lg" style={{backgroundColor:"grey"}}>
              Grey
            </button>
            <button onClick={()=> setColor("black")} className="outline-none px-4 py-1 text-white rounded-full shadow-lg" style={{backgroundColor:"black"}}>
              Black
            </button>
            <button onClick={()=> setColor("blue")} className="outline-none px-4 py-1 text-white rounded-full shadow-lg" style={{backgroundColor:"blue"}}>
              Blue
            </button>
            <button  onClick={()=> setColor("green")} className="outline-none px-4 py-1 text-white rounded-full shadow-lg" style={{backgroundColor:"green"}}>
              Green
            </button>
          </div>
        </div>
        
        </div> 

    </>
  )
}

export default App
