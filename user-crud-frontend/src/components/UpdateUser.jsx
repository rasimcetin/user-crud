import { useNavigate, useParams } from "react-router-dom";
import useFetchData from "../hooks/fetchData";
import { Box, CircularProgress } from "@mui/material";
import UserDetail from "./UserDetail";
import axios from "axios";
import { userUpdateSchema } from "../schemas/index";

const UpdateUser = () => {
  let { id } = useParams();
  const { data, isLoading, error } = useFetchData(
    "http://localhost:5172/api/User/" + id
  );

  const navigate = useNavigate();

  const updateUser = async (user) => {
    try {
      const response = await axios.put(
        "http://localhost:5172/api/User/" + user.id,
        user
      );
      console.log(response);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isLoading && error === null ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : data !== null ? (
        <UserDetail
          user={data}
          userAction={updateUser}
          isForUpdate={true}
          validationSchema={userUpdateSchema}
        />
      ) : (
        <div>{"No data found"}</div>
      )}
      {isLoading === false && error !== null && <div>{"Error occur"}</div>}
    </>
  );
};

export default UpdateUser;
