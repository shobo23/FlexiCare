import { RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './Home/HomePage'
import router from './Routes/Route'

function App() {

  return (
    <>
      {/* <HomePage /> */}
      <RouterProvider router={router}/>
    </>
  )
}

export default App
