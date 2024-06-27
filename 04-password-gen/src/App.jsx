
import { useState } from 'react'
import './App.css'
import { useCallback } from 'react'

function App() {
  
const [length,setLength]=useState(8)
const [numberAllowed, setNumberAllowed] = useState(false)
const [charAllowed, setCharAllowed] = useState(false)
const [password, setPassword] = useState("")

const passwordGenerator = useCallback(()=>{
  let pass=""
  let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  if (numberAllowed){
    str += "1234567890"
  }
  if(charAllowed){
    str +="~!@#$%^&*(){}|<>?`:"
  }

  for (let index = 1; index < length; index++) {
    
    
  }
},[length,numberAllowed,charAllowed,setPassword])


  return (
    <div className="flex justify-center w-full ">
    <div className=" bg-blue-500 shadow-md p-4 m-4 rounded-md">
        <h1
        className='text-xl font-bold text-white'
        >Password Generator</h1>
        <div className="flex mt-2">
          <input 
          className=' rounded-md mr-1'
          type="text" 
          
          />
          <button
          className='bg-white rounded-md mr-1 p-2'
          
          >copy</button>
        </div>
    </div>
</div>


  )
}

export default App
