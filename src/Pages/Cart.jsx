import React, { useState } from 'react'
import { toast } from 'react-toastify' ;

const Cart = (props) => {
    console.log(props.abcd)
    let sum=0;
    props.abcd.forEach((x)=>{
      sum= sum+x.price;
    })

    const handleDelete=(obj,i)=>{
    
      
      let copyArr=[...props.abcd]
      copyArr.splice(i,1)
     
      props.setarray(copyArr)
    }
    // let sum=;
    const handleIncrement=(obj,i)=>{
      obj.price=obj.price+(obj.price/obj.quantity);
      obj.quantity=obj.quantity+1;
      console.log(obj)
      let index=props.abcd.findIndex((ele)=>ele.id===obj.id)
      console.log(index)
      let copyArr=[...props.abcd]
      copyArr[index]=obj
      console.log(copyArr)
      props.setarray(copyArr)
    }
    // if(obj.quantity.length>0){
      const handleDecrement=(obj,i)=>{
        obj.price=obj.price-(obj.price/obj.quantity);
        obj.quantity=obj.quantity-1;
        if(obj.quantity<1){
          return
        }
        console.log(obj)
        let index=props.abcd.findIndex((ele)=>ele.id===obj.id)
        console.log(index)
        let copyArr=[...props.abcd]
        copyArr[index]=obj
        console.log(copyArr)
        props.setarray(copyArr)
      }
    // }
  
  
  return (
<div className="">
  {
    props.abcd.length>0?<table className='w-full'/>
    :
    <h1>cart is empty</h1>

    
  }
  {
sum>0 && <h1 className='text-right mr-20 text-3xl'>subtotal({props.abcd.length})=${sum.toFixed(2)}</h1>

}

  <table className="w-full ">
    <thead >
      <tr>
        <th>S.No</th>
        <th className='pl-10'>Image</th>
        <th>Title</th>
        <th>Price</th>
        <th>Quantity</th>
      </tr>
    </thead>
    <tbody className=''>
{
     
props.abcd.map((obj,index)=>{
return <tr className='text-center border-b-2'>
        <td >{index+1}</td>
        <td className='h-36 flex justify-center'><img src={obj.thumbnail} alt="" /></td>
        <td>{obj.title}</td>
        <td>{obj.price.toFixed(2)}</td>

        <td><button className='bg-gray-500 p-3 rounded-md' onClick={()=>handleIncrement(obj,index)} >+</button>{obj.quantity}</td>
        <td><button className='bg-gray-500 p-3 rounded-md' onClick={()=>handleDecrement(obj,index)}>-</button></td>
        <td className='h-20 w-20 bg-red-700' onClick={()=>handleDelete()}>Delete</td>
        <td></td>
      </tr>
}
  )}
    </tbody>

  </table>
<div className='mt-7'>
<button className=' float-end px-3 py-3 bg-orange-500 mr-5'>PLACE ORDER</button>
</div>
</div>
  )
}

export default Cart
