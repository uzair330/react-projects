import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-3xl font-extrabold text-cyan-600 py-4" >Hello From Muhammad Uzair
    <div className="flex justify-center gap-4">

    <Card 
    name={"Muhammad Uzair"}
    btntxt={"Visit Now"}
    paragraph={"This is some random text written by Muhammad Uzair"}
    image_source={"https://images.unsplash.com/photo-1711843250829-1234532f335f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D"}
    />
    
    <Card 
    name={"Muhammad Tufail"}
    btntxt={"Click Now"}
    paragraph={"This is some random text written by Muhammad Tufail"}
    image_source={"https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"}
    />

<Card 
    name={"Muhammad Khubaib"}
    btntxt={"Visit Now"}
    paragraph={"This is some random text eritten by Muhammad Khubaib"}
    image_source={"https://images.unsplash.com/photo-1711840672509-266aca30e7f9?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
    />

    </div>
    </div>

    
  )
}

export default App
