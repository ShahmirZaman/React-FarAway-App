import { useState } from "react";
import Form from "./components/Form/Form";
import PackingList from "./components/PackingList/PackingList";
import Stats from "./components/Stats/Stats";
import Logo from "./components/logo/Logo";

const itemsArray = []
function App() {
  const[itemsArr,setItemsArr] = useState(itemsArray)
  const[count,setCount] = useState(0)
  return (
    <>
      <Logo/>
      <Form items={itemsArr} setItems={setItemsArr} />
      <PackingList items={itemsArr} setItems={setItemsArr} count={count} setCount={setCount} />
      <Stats items={itemsArr} setItems={setItemsArr} count={count}/>
    </>
  );
}

export default App;
