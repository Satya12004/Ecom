import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const About = (props) => {

  const[products,setproducts]=useState([])
 
  console.log(products)
  async function getAllData(){
    let rest= await fetch('https://dummyjson.com/products?limit=0');
    let data= await rest.json();
  console.log(data);
  console.log(data.products);
  setproducts(data.products)
  
  }
 useEffect(()=>{
 getAllData()
 },[])
  function handleclick(obj) {
    props.xyz(obj)
  }
  return (
  <>
    <div className='grid grid-cols-3'>
      {
        products.map((ele)=>{
          return <div className='border-2'>
            <img src={ele.thumbnail} alt="" />
            <p>{ele.title}</p>
            <p>{ele.price}</p>
            <Link to="/view" state={ele}  className='bg-green-950 text-white px-4 py-2 rounded-md '>View Product</Link>
            <button className='bg-gray-50'onClick={()=>handleclick(ele)}>add to cart</button>
          </div>

        })
      }
    </div>
  </>
  
  )
}

export default About
