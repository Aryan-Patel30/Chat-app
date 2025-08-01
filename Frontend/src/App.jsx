import React from "react";
import Left from "./home/Leftpart/Left";
import Right from "./home/Rightpart/Right";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import { useAuth } from "./Context/AuthProvider";
import { Routes, Route, Navigate } from "react-router-dom";
import Loading from "./Components/Loading";

function App() {
  const [authUser, setAuthUser] = useAuth();
  return (
    <Routes>
      <Route
        path="/"
        element={
          authUser ? (
            <div className="flex h-screen">
              <Left />
              <Right />
            </div>
          ) : (
            <Navigate to = {"/login"}  />
          )
        }
      />
      <Route path="/signup" element = {authUser ? < Navigate to="/"/> :<Signup />} />
      <Route path="/login"  element = {authUser ? < Navigate to="/"/> :<Login />} />
    </Routes>
  );
}

export default App;
