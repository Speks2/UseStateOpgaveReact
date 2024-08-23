import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [number, setNumber] =useState(0)
  const [input, setInput] =useState('Send en hilsen til')

  return (
    <>
     <button onClick={()=> setNumber(number + 1)
          
         
     }>Click</button>
     <p>{number}</p>
     {/* {console.log(number)} */}

     <input type="text" onChange={(event) => setInput(event.target.value)} />
     <p>{input}</p>
    </>
    
    
  )
}

export default App