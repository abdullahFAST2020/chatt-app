import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>}></Route>
        <Route path="about" element={<h1>About</h1>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
