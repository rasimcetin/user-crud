import { useState } from "react";
import UserDetail from "./UserDetail";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

  const changeUserProperty = (propertyName, propertyValue) => {
    setUser({ ...user, [propertyName]: propertyValue });
  };

  const createUser = async () => {
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
      changeUser={changeUserProperty}
      isForUpdate={false}
    />
  );
};
