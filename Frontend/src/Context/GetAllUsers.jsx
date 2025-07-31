import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const GetAllUsers = () => {
  const [allusers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAllUsers = async () => {
      setLoading(true);
      try {
        const response = await axios.get("/api/user/getAllUser", {
          withCredentials: true, // This will send the httpOnly cookie automatically
        });
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
