import React, { useState } from 'react'

export default function Form({items,setItems}) {
  
  const[itemName,setItemName] = useState("")
  const[quantity,setQuantity] = useState(1)
  
  const addItem = () => {
    const myItems = [...items]
    myItems.push({
      name:itemName,
      quantity:quantity,
      packed:false
    })
    setItems(myItems)
  }


  return (
    <div className=' bg-[#df6b1b] flex justify-center items-center h-[40px] gap-2 text-xl'>
      <p>What do you need for your 😍 trip?</p>
      <input 
      type='number' 
      placeholder='1' 
      className=' w-20 outline-none border-none rounded-xl px-4 bg-[#fde7aa]'
      onChange={(e) => setQuantity(e.target.value)}  
      />
      <input 
      type='text' 
      placeholder='Item...' 
      className=' w-[300px] rounded-xl px-4 outline-none border-none bg-[#fde7aa]'
      onChange={(e) => {setItemName(e.target.value)}}
      />
      <button 
      className='bg-[#66c1a3] px-6 rounded-xl font-medium cursor-pointer'
      onClick={addItem}
      >ADD</button>
    </div>
  )
}
