

import './App.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';
import About from './Components/ِAbout/About';
import Error from './Components/Error/Error';
import Details from './Components/Details/Details';



 
  let routes = createBrowserRouter([
    {path : "", element : <Layout/> , children :[
      {index : true , element : <Home/>},
      {path : "blog" ,element : <Blog/>},
       {path : "/blog/:slug" , element : <Details/>},
      {path : "about" ,element : <About/>},
      {path : "*" , element : <Error/>}
    ]}
  ])

  
  
  

export default function App() {
 
  return (
    <>
     <RouterProvider router={routes}></RouterProvider>
    </>
  )
}


