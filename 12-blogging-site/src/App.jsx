import { useDispatch } from 'react-redux'
import authService from "./appWrite/auth"
import './App.css'

function App() {
 const [loading, setLoading] = useState(true)

 const dispatch = useDispatch()
useEffect(() => {
authService.getUser()
}, [input])

  return (
    <div className="text-7xl font-bold">
      A blog with appwrite
    </div>
  )
}

export default App
