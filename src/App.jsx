import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css'
import HomeComponents from "./Components/HomeComponents";
// App
const App = () => {
  return (
    <>
    <div className=" bg-slate-800  flex  w-screen h-screen">
        <Routes>
          <Route path="/" element={<HomeComponents/>}></Route>
          
        </Routes>
    </div>
    </>
  
  );
};

export default App;
