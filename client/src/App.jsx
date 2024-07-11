import React,{lazy} from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";

const Home= lazy(
  ()=> import("./pages/Home") // this is called dynamic import
);

const Login= lazy(
  ()=> import("./pages/Login") // this is called dynamic import
);

const Chat= lazy(
  ()=> import("./pages/Chat") // this is called dynamic import
);

const Groups= lazy(
  ()=> import("./pages/Groups") // this is called dynamic import
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/chat" element={<Chat/>}/>
        <Route path="/groups" element={<Groups/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
