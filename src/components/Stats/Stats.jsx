import React from 'react'

export default function Stats({items,count,setItems}) {
  const totalPacked = (count * 100)/items.length
  return (
    <div className='bg-[#67c1a3] w-full h-[60px] flex justify-center items-center text-xl'>
      <p>You have {items.length} items on your list, and you already packed {count} ({!totalPacked ? "0" : Math.floor(totalPacked)}%)</p>
    </div>
  )
}
