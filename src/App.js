import React, { useState, useCallback,useMemo } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";
import DemoList from "./components/Demo/DemoList";

function App() {
 const [listTitle,setListTitle] = useState('My List');

 const changeTitleHandler = useCallback(()=>{
  setListTitle('New Title');
 },[])

 const listItems = useMemo(()=> [5,3,1,10,9],[])

 


  return (
    <div className="app">
     <DemoList title={listTitle} items={listItems} /> 
     {/* <DemoList title={listTitle} items={[5,3,1,10,9]} /> */}
     <Button onClick={changeTitleHandler}>Change List Title</Button>
     <hr/>
    </div>
  );
}

export default App;
