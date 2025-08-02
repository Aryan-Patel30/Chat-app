import axios from "axios";
import React, { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthProvider";
import { useContext } from "react";
import { SocketContext } from "../../Context/SocketContext";


function Logout() {
  const [loading, setLoading] = useState(false);
  const [authUser, setAuthUser] = useAuth();
  const { socket } = useContext(SocketContext);
  const navigate = useNavigate();
  const handleLogout = async () => {
    setLoading(true);
    try {
      // Disconnect socket before logging out
      if (socket) {
        socket.disconnect();
      }
      const response = await axios.post("/api/user/logout");
      localStorage.removeItem("ChatApp");
      Cookies.remove("token");
      setLoading(false);
      alert("Logout successful");
      navigate("/login");
      setAuthUser(null);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="flex h-[9vh]">
      <div
        onClick={handleLogout}
        className="text-white px-6 py-4 hover:bg-slate-700 duration-300 cursor-pointer rounded-md flex items-center space-x-2"
      >
        <BiLogOut className="text-2xl" />
        <h1 className="text white">Logout</h1>
      </div>
    </div>
  );
}

export default Logout;
