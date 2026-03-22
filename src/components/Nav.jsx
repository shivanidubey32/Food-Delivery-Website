import React, { useContext, useEffect, useState } from 'react'
import { IoFastFood } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { dataContext } from '../context/UserContext';
import { food_items } from '../food (1)';
import { useSelector } from 'react-redux';
function Nav() {
  let {input,setInput,Cate,setCate,showcart,setShowCart} =useContext(dataContext)
  useEffect(()=>{
   let newList= food_items.filter((item)=>item.food_name.includes(input) || item.food_name.toLowerCase().includes(input))
    setCate(newList)
  },[input])
 let items=useSelector(state=>state.cart)
  return (
    <div className='w-full h-[100px] flex justify-between item-center px-5 py-3 md:px-8'>
      <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'>
       <IoFastFood className=' w-[30px] h-[30px] text-red-800'/>
      </div>
      <form className='w-[45%] h-[60px] bg-white flex items-center gap-5 px-5  rounded-md shadow-xl  md:w-[70%]'
      onSubmit={(e)=>e.preventDefault()}>
      <FaSearch className='text-red-800 w-[20px] h-[20px]' />
      <input type="text" placeholder='Search Items...' className='w-[100%] outline-none text-[16px] md:text-[20px] '
      onChange={(e)=>setInput(e.target.value)}  value={input}/>
      </form>
      <div className='w-[60px] h-[60px] bg-white flex justify-center items-center shadow-xl cursor-pointer rounded-md relative'
      onClick={()=>{
        setShowCart(true)
      }}>
        <span className='absolute top-0 right-2 text-red-800 font-bold text-[18px]'>{items.length}</span>
      <MdOutlineShoppingBag className='w-[30px] h-[30px] text-red-800'/>
      </div>
       </div>
  )
}

export default Nav
