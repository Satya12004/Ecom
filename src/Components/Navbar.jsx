import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar flex justify-center gap-10 bg-black text-white'>
   
      
     <Link to={'/'}>About</Link>
     <Link to={'/Home'}>Home</Link>
     <Link to={'/Login'}>Login</Link>
     <Link to={'/Cart'}>Cart</Link>
    
    </div>
  )
}

export default Navbar
