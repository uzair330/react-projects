import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider,createBrowserRouter,Route,createRoutesFromElements} from "react-router-dom"
import App from './App'
import Home from './components/HOME/Home'
import About from './components/HOME/About/about'
import Contact from './Contact/Contact'
import User from './components/User/User'
// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<App/>,
//     children: [
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"/about",
//         element: <About/>
//       },
//       {
//         path:"/contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])


const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path={"/"} element={<App/>}>
<Route path={""} element={<Home/>}/>
<Route path={"/about"} element={<About/>}/>
<Route path={"/contact"} element={<Contact/>}/>
<Route path={"user/:userid"} element={<User/>}/>


    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
