import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import About from './Pages/About'
import Home from './Pages/Home'
import Login from './Pages/Login'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ViewDetails from './Pages/ViewDetails'
import Cart from './Pages/Cart'
import { ToastContainer,toast } from 'react-toastify'

function App() {
  const[array,setarray]=useState([])
  function xyz(ans) {
    // console.log(ans)
    const find=array.find((x)=>x.id===ans.id)
    ans.quantity=1;
    if(find){ 
      toast.success('item allready to cart',{position:"top-left"})
     return
    }
     toast.success('item added to cart',{position:'top-center'})
   
    setarray([...array,ans])

  }

  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<About xyz={xyz}/>}/>
      <Route path='/Home' element={<Home/>}/>
     <Route path='/Login'element={<Login/>}/>
     <Route path='/View' element={<ViewDetails/>}/>
     <Route path='/Cart' element={<Cart abcd={array} setarray={setarray}/>}/>
     
      </Routes>
    <ToastContainer/>
     </BrowserRouter>
      
    </>
  )
}

export default App
