import React, { useContext, useState } from 'react'
import Nav from '../components/Nav'
import Categories from '../../Category (1)'
import Card from '../components/Card'
import { food_items } from '../food (1)'

import { RxCross2 } from "react-icons/rx";
import { dataContext } from '../context/UserContext'
import Card2 from '../components/Card2'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

function Home() {
  let {Cate,setCate,input,showcart,setShowCart}=useContext(dataContext)


function filter(Category){
    if(Category==="All"){
      setCate(food_items);
    }else{
      let newList=food_items.filter((item)=>(item.food_category===Category))
      setCate(newList);
    }
  }
let items=useSelector(state=>state.cart)

let subtotal=items.reduce((total,item)=>total+item.qty*item.price,0)
let deliveryFee=20;
let taxes=subtotal*0.5/100;
let total=Math.floor(subtotal+deliveryFee+taxes);
  
 
  return (
    <div className=' bg-slate-300 w-full min-h-screen'>
      <Nav/>
     {!input? <div className='flex flex-wrap justify-center items-center  gap-6 w-[100%] '>
        {Categories.map((item)=>{
         return <div className='w-[140px] h-[150px] flex flex-col items-start gap-5 bg-white p-5  justify-start text-[20px] font-semibold text-gray-600 rounded-lg shadow-lg hover:bg-red-200 cursor-pointer transition-all duration-200
         ' onClick={()=>filter(item.name)}>
            {item.icon}
            {item.name}
        </div>
         })}
      </div>:null}
     
     <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8' >
     { Cate.length>1? Cate.map((item)=>(
      <Card name={item.food_name} image={item.food_image} 
      price={item.price} id={item.id} type={item.food_type}/>
     )):
     <div className='text-red-800 pt-5 font-semibold text-lg'>No Dish found</div>
     }
    
     </div>
     {/* sideone */}
     <div className={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0  bg-white flex flex-col items-center  shadow-xl  p-[25px] 
     overflow-auto transition-all duration-500 ${showcart?"translate-x-0":"translate-x-full"}`}
     >
       <header className='w-[100%] flex justify-between items-center  '>
       <span className='text-red-800 text-[18px] font-semibold'>Order Items</span>
       <RxCross2 className='text-red-800 text-[18px] w-[30px] h-[30px] font-extrabold cursor-pointer'
       onClick={()=>setShowCart(false)} />
       </header>
       {items.length>0? <>
      <div className='w-full mt-8 flex flex-col gap-8 '>
        {items.map((item)=>(
          <Card2 name ={item.name} price={item.price} image={item.image}
          id={item.id} qty={item.qty}/>
        ))}
      </div>
      {/* price part */}
      <div className='w-full border-t-2 border-b-2 border-gray-400 mt-7
      flex flex-col gap-2 p-8'>
 
   <div className='w-full flex justify-between items-center'>
    <span className='text-xl text-gray-600 font-semibold'>Subtotal </span>
    <span className='text-red-800 font-semibold text-lg'>RS. {subtotal}/-</span>
   </div>
     <div className='w-full flex justify-between items-center'>
    <span className='text-xl text-gray-600 font-semibold'>Delivery Fee </span>
    <span className='text-red-800 font-semibold text-lg'>RS. {deliveryFee}/-</span>
   </div>
   
   <div className='w-full flex justify-between items-center'>
    <span className='text-xl text-gray-600 font-semibold'>Taxes </span>
    <span className='text-red-800 font-semibold text-lg'>RS. {taxes}/-</span>
   </div>
      </div>

        <div className='w-full flex justify-between items-center p-9  '>
    <span className='text-xl text-gray-600 font-semibold'>Total </span>
    <span className='text-red-800 font-semibold text-2xl'>RS. {total}/-</span>
   </div>
   <button  className='w-[80%] p-4 bg-red-500 rounded-md text-white font-semibold hover:bg-red-300 transition-all text-xl'
   onClick={()=>{toast.success("Order Placed")
   }}>Place Order</button>
     </>:
     <div className='text-center text-2xl text-red-800 font-semibold pt-7'>
      Empty Cart
      </div>
      }
      
     </div>
    
    </div>
  )
}

export default Home
