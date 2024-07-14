import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectRoute from "./components/auth/ProtectRoute";

const Home = lazy(
  () => import("./pages/Home") // this is called dynamic import
);

const Login = lazy(
  () => import("./pages/Login") // this is called dynamic import
);

const Chat = lazy(
  () => import("./pages/Chat") // this is called dynamic import
);

const Groups = lazy(
  () => import("./pages/Groups") // this is called dynamic import
);

const NotFound = lazy(
  () => import("./pages/NotFound") // this is called dynamic import
);

let user = true;

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<ProtectRoute user={user} />}>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/groups" element={<Groups />} />
          </Route>

          <Route
            path="/login"
            element={
              <ProtectRoute user={!user} redirect="/">
                <Login />
              </ProtectRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
