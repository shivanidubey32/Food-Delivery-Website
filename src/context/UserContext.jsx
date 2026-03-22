import React, { createContext, useState } from 'react'
import { food_items } from '../food (1)';
export const dataContext=createContext()
function UserContext({children}) {
    let [input,setInput]=useState("");
    let [Cate,setCate]=useState(food_items)
    let [showcart,setShowCart]=useState(false)
    let data={
      input,
      setInput,
      Cate,
      setCate,
      showcart,
      setShowCart
    }
  return (
    <div>
        <dataContext.Provider value={data}>
               {children}
        </dataContext.Provider>
  
    </div>
  )
}

export default UserContext
