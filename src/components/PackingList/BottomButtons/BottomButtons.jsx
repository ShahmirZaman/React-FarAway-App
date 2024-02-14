import { computeHeadingLevel } from "@testing-library/react";
import React, { useState } from "react";

export default function BottomButtons({items,setItems}) {
  
  const[sortOrder,setSortOrder] = useState("inputOrder")
  
  const sortHandler = (e) => {
    const newSortOrder = e.target.value;
    setSortOrder(newSortOrder)

    const newItemsArray = [...items].sort((a,b) => {
      if(a[newSortOrder] < b[newSortOrder]) return -1
      if(a[newSortOrder] > b[newSortOrder]) return 1
      return 0
    })
    setItems(newItemsArray)
  }

  const clearListHandler = () => {
    setItems([]);
  }
  
  return (
    <div className="flex justify-center items-center gap-x-6">
      <select 
      name="sort" 
      id="sort" 
      value={sortOrder}
      className="bg-[#fde7aa] px-4 py-2 rounded-3xl outline-none border-none"
      onChange={sortHandler}
      >
        <option value="inputOrder">SORT BY INPUT ORDER</option>
        <option value="description">SORT BY DESCRIPTION</option>
        <option value="packedStatus">SORT BY PACKED STATUS</option>
      </select>
      <button className="bg-[#fde7aa] px-4 py-2 rounded-3xl uppercase" onClick={clearListHandler}>
        Clear List
      </button>
    </div>
  );
}
