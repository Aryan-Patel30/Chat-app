import api from "../../utils/api";
import React, { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthProvider";
import { useContext } from "react";
import { SocketContext } from "../../Context/SocketContext";
import toast from "react-hot-toast";

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
      const response = await api.post("/api/user/logout");
      localStorage.removeItem("ChatApp");
      Cookies.remove("token");
      setLoading(false);
      toast.success("Logout successful");
      navigate("/login");
      setAuthUser(null);
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("error in logout");
    }
  };

  return (
    <div className="flex h-auto lg:h-[9vh] min-h-[60px] mt-auto">
      <div
        onClick={handleLogout}
        className="text-white px-3 lg:px-6 py-3 lg:py-4 hover:bg-slate-700 duration-300 cursor-pointer rounded-md flex items-center space-x-2 w-[35%] mx-2 lg:mx-0"
      >
        <BiLogOut className="text-xl lg:text-2xl" />
        <h1 className="text-sm lg:text-base">Logout</h1>
      </div>
    </div>
  );
}

export default Logout;
