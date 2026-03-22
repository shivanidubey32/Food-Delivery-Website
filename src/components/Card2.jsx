import React from 'react'
import image1 from "../assets/image1.avif"
import { ImBin } from "react-icons/im";
import {useDispatch} from 'react-redux'
import { RemoveItem,IncrementQty,DecrementQty } from "../redux/cartSlice"
function Card2({name,price,id,image,qty}) {
  let dispatch=useDispatch()
  return (
    <div className='w-[100%] h-[120px]  shadow-lg p-2 flex justify-between '>
      <div className='w-[60%] h-full  flex gap-[20px]'>
       <div className='w-[60%] h-full overflow-hidden'>
         <img src={image} alt=""  className=' object-cover rounded-lg'/>
         </div>
         <div className=' w-[40%] h-full flex flex-col gap-5'>
            <div className='text-lg text-gray-600 font-semibold'>{name}</div>
            <div  className='w-[110px] text-xl h-[50px] bg-slate-500 flex rounded-lg  overflow-hidden shadow-lg font-semibold border-2 border-red-400'>
                <button className='w-[30%] h-full  bg-white items-center text-red-500 hover:bg-gray-200'onClick={()=>{qty>1? dispatch(DecrementQty(id)):1}}>-</button>
                <span className='w-[40%] h-full bg-slate-200 flex justify-center items-center text-red-500 '>{qty}</span>
                <button className='w-[30%] h-full bg-white  items-center text-red-500 hover:bg-gray-200' onClick={()=>dispatch(IncrementQty(id))}>+</button>
            </div>
         </div>
      </div>

      <div className='flex flex-col justify-start  items-end gap-6'>
       <span className='text-red-800 text-xl font-semibold ' >Rs. {price}/-</span>
       <ImBin  className='w-[30px] h-[30px] text-red-600 cursor-pointer'
       onClick={()=>dispatch(RemoveItem(id))} />
      </div>
    </div>
  )
}

export default Card2
