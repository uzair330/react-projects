
import { useState } from 'react'
import './App.css'
import { useCallback } from 'react'
import { useEffect } from 'react'

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
    let char = Math.floor((Math.random()* str.length+1))
    pass += str.charAt(char) 
    
  }
  setPassword(pass)
},[length,numberAllowed,charAllowed,setPassword])

useEffect(()=>{
  passwordGenerator()

},[length,numberAllowed,charAllowed])
  return (
    <div className="flex justify-center w-full ">
    <div className=" bg-blue-950 shadow-md p-4 m-4 rounded-md">
        <h1
        className='text-xl font-bold text-white'
        >Password Generator</h1>
        <div className="flex mt-2">
          <input 
          className='w-full rounded-lg mr-1 p-1'
          type="text" 
          placeholder='password'
          value={password}
          readOnly

          />
          <button
          className='bg-white rounded-md mr-1 p-2'
          
          >copy</button>
        </div>
        <div className="flex justify-start p-2 gap-x-4 text-blue-400">
          <input 
          className=''
          type="range" 
          min={6}
          max={100}
          value={length}
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label >Length:
          <span className='text-white'>

           {" "+length}
          </span>
           
           </label>
           <div className="">
            <input 
            className='mr-1'
            type="checkbox" 
            defaultChecked={numberAllowed}
            onChange={()=>{
              setNumberAllowed((prev)=>!prev)
            }}
            />
            <label  >Number</label>
           </div>

           <div className="">
            <input 
            className='mr-1'
            type="checkbox" 
            defaultChecked={charAllowed}
            onChange={()=>{
              setCharAllowed((prev)=>!prev)
            }}
            />
            <label  >Char</label>
           </div>
        </div>
    </div>
</div>


  )
}

export default App
