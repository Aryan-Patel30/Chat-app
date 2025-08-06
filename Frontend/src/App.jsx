import React from "react";
import Left from "./home/Leftpart/Left";
import Right from "./home/Rightpart/Right";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import { useAuth } from "./Context/AuthProvider";
import { Routes, Route, Navigate } from "react-router-dom";
import Loading from "./Components/Loading";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [authUser, setAuthUser] = useAuth();
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            authUser ? (
              <div className="flex h-screen overflow-hidden">
                {/* Desktop sidebar - hidden on mobile */}
                <div className="hidden lg:block w-[30%]">
                  <Left />
                </div>
                {/* Right panel takes full width on mobile, 70% on desktop */}
                <div className="w-full lg:w-[70%]">
                  <Right />
                </div>
              </div>
            ) : (
              <Navigate to={"/login"} />
            )
          }
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <Signup />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
