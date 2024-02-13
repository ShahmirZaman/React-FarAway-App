import React from 'react'

export default function Item({items,item,setItems,indexNumber}) {
  const packedItemHandler = (packingValue,itemNumber) => {
      const myItems = [...items]
      myItems[indexNumber].packed = !packingValue
      setItems(myItems)
  }
  const deleteItemHandler = () =>{
    console.log("chala kia??")
  }
  return (
    <div className='flex gap-x-2 text-black bg-[#fde7aa] p-2 rounded-full'>
      <input type='checkbox' checked = {item.packed}
        onChange={() => packedItemHandler(item.packed,indexNumber)}
      />
      <p 
      style={{
        textDecoration : item.packed ? "line-through" : "none" 
      }}>
      {`${item.quantity} ${item.name}`}
      </p>
      <button className='text-red font-semibold' onClick={deleteItemHandler}>X</button>
    </div>
  )
}
