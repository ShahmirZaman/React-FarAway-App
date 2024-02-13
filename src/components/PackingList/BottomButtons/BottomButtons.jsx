import React from "react";

export default function BottomButtons() {
  return (
    <div className="flex justify-center items-center gap-x-6">
      <select name="sort" id="sort" className="bg-[#fde7aa] px-4 py-2 rounded-3xl outline-none border-none">
        <option value="input order">SORT BY INPUT ORDER</option>
        <option value="desc">SORT BY DESCRIPTION</option>
        <option value="packed status">SORT BY PACKED STATUS</option>
      </select>
      <button className="bg-[#fde7aa] px-4 py-2 rounded-3xl uppercase">
        Clear List
      </button>
    </div>
  );
}
