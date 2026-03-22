import React from 'react'
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { AddItems } from '../redux/cartSlice';
import { toast } from 'react-toastify';
function Card({name,image,id,price,type}) {
  let dispatch=useDispatch()
  return (
    <div className='w-[300px] h-[400px] bg-white p-4 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-red-300 '>
      <div className='w-[100%] h-[60%] overflow-hidden rounded-lg'>
      <img src={image} alt="" className='object-cover' />
      </div>
      <div className='text-2xl font-semibold '>
       {name}
      </div>
      <div className='w-[100%] flex justify-between items-center'>
      <div className='text-red-800  font-bold text-lg'>Rs. {price}/-</div>
      <div className='flex justify-center items-center gap-2 text-red-800 text-lg font-semibold' >
       {type==="veg"? <LuLeafyGreen  className='text-green-600 font-bold'/>:<GiChickenOven />} 
         <span>{type}</span>
         </div>
      </div>
       <button className='w-full p-4 bg-red-500 rounded-md text-white font-semibold hover:bg-red-300 transition-all' onClick={
        ()=>{dispatch(AddItems({id:id,name:name,price:price,image:image,qty:1}))
     ; toast.success("item added")} } >Add to dish</button>
    </div>
  )
}

export default Card
