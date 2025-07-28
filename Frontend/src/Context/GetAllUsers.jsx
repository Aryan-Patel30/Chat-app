import React from "react";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const GetAllUsers = () => {
  const [allusers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAllUsers = async () => {
      setLoading(true);
      try {
        const token = Cookies.get("token");
        console.log("Token:", token);
        if (!token) {
          throw new Error("No token found");
        }
        
        const response = await axios.get("/api/user/getAllUser", {
            withCredentials: "include",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        setAllUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchAllUsers();
  }, []);
  return [allusers, loading];
};

export default GetAllUsers;
