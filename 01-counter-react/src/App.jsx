import { useState } from 'react'
import './App.css'

function App() {
let [counter,setCounter]=useState(15) 

const handleIncrement=()=>{
  counter=counter+1
 console.log("Clicked",counter);
 setCounter(counter)
}

const handledecrement=()=>{
  counter=counter-1
 console.log("Clicked",counter);
 setCounter(counter)

}
  return (
    <>
    <h1>Simple counter app</h1>
  <h2>Counter: {counter}</h2>
  <br />
  <button
  onClick={handleIncrement}
  >Increment {counter}</button>
  <br />
  <br />
  
  <button
  onClick={handledecrement}
  >Decrement {counter}</button>
  <p>footer {counter}</p>
    </>
  )
}

export default App
