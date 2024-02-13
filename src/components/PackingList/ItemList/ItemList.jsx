import React from 'react'
import Item from './Item/Item.jsx'

export default function ItemList({items,setItems}) {
  return (
    <div className='flex justify-center gap-2 flex-wrap items-center'>
      {items?.map((item,index) => {
        return <Item items={items} item={item} indexNumber={index} setItems={setItems}/>
      })}
    </div>
  )
}
