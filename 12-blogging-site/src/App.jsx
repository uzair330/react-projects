import { useDispatch } from 'react-redux'
import authService from "./appWrite/auth"
import { useEffect, useState } from 'react'
import { login, logout } from "./store/authSlice"
import {Header} from './components/Header'
import {Footer} from './components/Footer'
import './App.css'


function App() {
 const [loading, setLoading] = useState(true)

 const dispatch = useDispatch()
useEffect(() => {
authService.getUser()
.then((userData)=>{
  if(userData){
    dispatch(login(userData))
  }else{
    dispatch(logout())
  }
}

)
.finally(()=>{
  setLoading(false)
} )
}, [])

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block ">
        <Header/>
        <main>
          TODO: {/* <Outlet/> */}
        </main>
        <Footer/>
      </div>
    </div>
  ) : null
}

export default App


