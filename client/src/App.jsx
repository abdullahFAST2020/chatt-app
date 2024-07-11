import React,{lazy} from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProtectRoute from './components/styles/auth/ProtectRoute';

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

const NotFound= lazy(
  ()=> import("./pages/NotFound") // this is called dynamic import
);

let user = true;

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectRoute user={user}/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/chat" element={<Chat/>}/>
          <Route path="/groups" element={<Groups/>}/>
        </Route>

        <Route 
          path="/login" 
          element={
            <ProtectRoute user={!user} redirect= "/">
              <Login/>
            </ProtectRoute>}
         />

          <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
