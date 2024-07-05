import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
  const [username,setUsername] = useState("")
  const [password, setPassword] = useState("")
  const {setUser} = useContext(UserContext)
  const handleSubmit = ()=>{
    setUser({username,password})
  }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)} />
        <br />
        <br />

        <input type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        <br />
        <br />
        <button onClick={handleSubmit}>Submit</button>
        <br />

      
    </div>
  )
}

export default Login

