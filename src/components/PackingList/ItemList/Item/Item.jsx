import React from 'react'

export default function Item({items,item,setItems,indexNumber,count,setCount}) {
  const packedItemHandler = (packingValue,itemNumber) => {
      const myItems = [...items]
      myItems[indexNumber].packed = !packingValue
      setItems(myItems)
      setCount(count + 1)
  }
  const deleteItemHandler = (indexNumber,item) =>{
    console.log(indexNumber,item)
    const myItems = [...items]
    myItems.splice(indexNumber,1);
    setItems(myItems);
    setCount(count - 1)
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
      <button className='text-red font-semibold' onClick={() => deleteItemHandler(indexNumber,item)}>X</button>
    </div>
  )
}
