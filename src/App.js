import { useState } from "react";
import Form from "./components/Form/Form";
import PackingList from "./components/PackingList/PackingList";
import Stats from "./components/Stats/Stats";
import Logo from "./components/logo/Logo";

const itemsArray = [
  {
    quantity:"4",
    name:"Socks",
    packed:false
  },
  {
    quantity:"5",
    name:"Shoes",
    packed:false
  },
  {
    quantity:"7",
    name:"Shirts",
    packed:false
  },
  {
    quantity:"4",
    name:"Jeans",
    packed:false
  },
  {
    quantity:"2",
    name:"t-shirts",
    packed:false
  },
]
function App() {
  const[itemsArr,setItemsArr] = useState(itemsArray)
  return (
    <>
      <Logo/>
      <Form items={itemsArr} setItems={setItemsArr} />
      <PackingList items={itemsArr} setItems={setItemsArr}  />
      <Stats/>
    </>
  );
}

export default App;
