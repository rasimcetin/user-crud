import { useState } from "react";
import UserDetail from "./UserDetail";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { userCreateSchema } from "../schemas/index";

export const NewUser = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: 0,
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const createUser = async (user) => {
    try {
      const response = await axios.post("http://localhost:5172/api/User", user);
      console.log(response);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <UserDetail
      user={user}
      userAction={createUser}
      changeUser={setUser}
      isForUpdate={false}
      validationSchema={userCreateSchema}
    />
  );
};
