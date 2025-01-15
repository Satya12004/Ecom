import React from 'react'
import { useLocation } from 'react-router-dom'

const ViewDetails = () => {
  let location=useLocation();
  let data=location.state;
  console.log(data)
  return (
    <div>
      <div className=''>
        <img className='h-[300px]' src={data.thumbnail} alt="" />

      </div>
      <h1 className='' ><span>Title</span>:{data.title}</h1>
      <h1><span>price</span>:{data.price}</h1>
      <h1><span>category</span>:{data.category}</h1>
      <h1><span>Stock</span>:{data.stock}</h1>
      <h1><span>category</span>:{data.category}</h1>
    </div>
  )
}

export default ViewDetails
