import React from "react";
import ItemList from "./ItemList/ItemList.jsx";
import BottomButtons from "./BottomButtons/BottomButtons.jsx";

export default function PackingList({items,setItems,count,setCount}) {
  return (
    <div className="bg-[#4c3423] w-full h-[500px] flex flex-col justify-between p-6 text-xl">
      <ItemList items={items} setItems={setItems} count={count} setCount={setCount}/>
      <BottomButtons items={items} setItems={setItems} count={count} setCount={setCount}/>
    </div>
  );
}

