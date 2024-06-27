import { useState } from 'react'

import './App.css'
import Button from "./components/Button"

function App() {
 
const [color, setColor] = useState("")

const greenColor = ()=>{
  setColor("bg-green-500")
}
const redColor = ()=>{
  setColor("bg-red-500")
}

const whiteColor = ()=>{
  setColor("white")
}
console.log(color);
  return (
    
    <div className={`w-full h-screen p-10 ${color}`}
 
    >
<div className="flex justify-center gap-4 bg-gray-50 shadow-xl rounded-md mx-32 ">
  
 <Button name={"Green Color"}
 btnFunc={greenColor}
 textcolor={"text-green-500"}
 />

<Button name={"Red Color"}
 btnFunc={redColor}
 textcolor={"text-red-500"}
/>

<Button name={"White Color"}
 btnFunc={whiteColor}
 textcolor={"text-black"}
/>

</div>
    </div>
  )
}

export default App
