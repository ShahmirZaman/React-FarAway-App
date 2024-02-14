import { computeHeadingLevel } from "@testing-library/react";
import React, { useState } from "react";

export default function BottomButtons({items,setItems}) {
  
  const[sortOrder,setSortOrder] = useState("inputOrder")
  
  const sortHandler = (e) => {
    let sortValue = e.target.value
    let nowItems = [...items]
    console.log(nowItems);
    // //Sort by Input
    const inputSorted = [...nowItems].sort((a,b)=>{return a.quantity - b.quantity});
    console.log(inputSorted)
    //Sort by description
    const descSort = [...nowItems].sort((a,b) => {
      return a.name.localeCompare(b.name);
    })
    //Sort by Packed Status
    const packedSort = [...nowItems].sort((a,b) => {
      return a.packed === b.packed ? 0 : (a.packed ? -1 : 1);
    })
    (sortValue == "inputOrder") ? setItems(inputSorted) : (sortValue == "description") ? setItems(descSort) : (sortValue == "packedStatus") ? setItems(packedSort) : console.log(true)
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
