import { useNavigate, useParams } from "react-router-dom";
import useFetchData from "../hooks/fetchData";
import { Box, CircularProgress } from "@mui/material";
import UserDetail from "./UserDetail";
import axios from "axios";

const UpdateUser = () => {
  let { id } = useParams();
  const { data, isLoading, error, setData } = useFetchData(
    "http://localhost:5172/api/User/" + id
  );

  const navigate = useNavigate();

  const changeUserProperty = (propertyName, propertyValue) => {
    setData({ ...data, [propertyName]: propertyValue });
  };

  const updateUser = async () => {
    try {
      const response = await axios.put(
        "http://localhost:5172/api/User/" + id,
        data
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
          changeUser={changeUserProperty}
          userAction={updateUser}
          isForUpdate={true}
        />
      ) : (
        <div>{"No data found"}</div>
      )}
      {isLoading === false && error !== null && <div>{"Error occured"}</div>}
    </>
  );
};

export default UpdateUser;
