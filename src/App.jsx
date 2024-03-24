import { useState, useEffect } from 'react'
import Page from './components/Page' 
import Home from './components/Home'
import ADpage from './components/Pages/ADpage'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
const Router = createBrowserRouter([
  {
    path:'/login',
    element:<Page/>
  },
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/okbro',
    element:<Home/>
  }
  ,
  {
    path:'/blog',
    element:<ADpage/>
  }

])
// import './App.css';
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
   
    <RouterProvider router={Router} />
     
        )
}

export default App
