import React from 'react';
import {Routes , Route } from "react-router-dom";
import Page1 from "./components/page1";
import Page2 from "./components/page2";

function App(){
  return (
        <Routes>
         <Route path="/" element={<Page1/>}></Route>
         <Route path="page2" element={<Page2/>}></Route>
        </Routes>
    );
}

export default App;